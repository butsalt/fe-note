const Busboy = require('busboy');

const router = require('koa-router')();

function parseUploadingFiles (req) {
  return new Promise((resolve, reject) => {
    const busboy = new Busboy({
      headers: req.headers,
    });
    const files = [];
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      const fileInfo = {
        field: fieldname,
        file: filename,
        size: 0,
      };
      files.push(fileInfo);
      file.on('data', function(data) {
        fileInfo.size += data.length;
      });
    });
    busboy.on('finish', () => {
      resolve(files);
    });
    req.pipe(busboy);
  });
}

router
  .post('/', async (ctx) => {
    const req = ctx.req;
    const files = await parseUploadingFiles(req);

    const res = ctx.response;
    res.set('content-type', 'application/json; charset=utf-8');
    res.body = JSON.stringify({
      files,
    });
  });

module.exports = router;