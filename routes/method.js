const router = require('koa-router')();

router
  .get('/', function (ctx) {
    ctx.body = `
      GET: ${ctx.query.msg}
    `;
  })
  .post('/', function (ctx) {
    ctx.body = `
      POST: ${ctx.request.body.msg}
    `;
  });

module.exports = router;