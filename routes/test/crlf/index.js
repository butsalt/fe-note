const fs = require('fs');
const path = require('path');

const router = require('koa-router')();

const sampleNames = ['linux', 'osx', 'win'];

router
  .get('/', async (ctx) => {
    const taskList = sampleNames
      .map(sampleName => {
        const filePath = path.resolve(__dirname, 'samples', `${sampleName}`);
        return new Promise((resolve, reject) => {
          fs.readFile(
            filePath,
            (err, buf) => {
              if (err) {
                reject(err);
              } else {
                resolve(
                  sampleName +': '+
                  buf.toString('hex').replace(/(?=^)(\w{2})/, '$1 ')
                );
              }
            }
          );
        });
      });
    const resultList = await Promise.all(taskList);
    await ctx.render(
      'result-list.tpl',
      {
        resultList,
      }
    );
  });

module.exports = router;