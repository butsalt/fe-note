const router = require('koa-router')();

router
  .get('/', async (ctx) => {
    ctx.body = `
      GET: ${ctx.query.msg}
    `;
  })
  .post('/', async (ctx) => {
    ctx.body = `
      POST: ${ctx.request.body.msg}
    `;
  });

module.exports = router;