const router = require('koa-router')();

router
  .get('/get', async (ctx) => {
    ctx.body = `
      console.log('name: ${ctx.cookies.get('name')}');
    `;
  })
  .get('/set', async (ctx) => {
    ctx.cookies.set(
      'name',
      'butSalt',
      {
        maxAge: 30 * 60 * 1000,
        path: '/',
      }
    );
    ctx.body = `
      console.log('set cookie: name=butSalt');
    `;
  });

module.exports = router;