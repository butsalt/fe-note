const router = require('koa-router')();

router
  .get('/get', function (ctx) {
    ctx.body = `
      name: ${ctx.cookies.get('name')}
    `;
  })
  .get('/set', function (ctx) {
    ctx.cookies.set(
      'name',
      'butSalt',
      {
        maxAge: 30 * 60 * 1000,
        path: '/',
      }
    );
    ctx.body = `name=butSalt`;
  });

module.exports = router;