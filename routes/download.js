const fs = require('fs');
const path = require('path');

const router = require('koa-router')();

router
  .get('/', async (ctx) => {
    const folderPath = ctx.query.folderPath;
    const fileName = ctx.query.fileName;
    const filePath = path.resolve(process.cwd() + folderPath + fileName);
    const res = ctx.response;
    res.set({
      'Content-Disposition': `attachment; filename=${fileName}`,
    });
    res.body = fs.readFileSync(filePath);
  });

module.exports = router;