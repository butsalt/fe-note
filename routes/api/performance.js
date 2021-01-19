const router = require('koa-router')();

router
  .get('/redirect', async (ctx) => {
    ctx.redirect('/pages/bom/performance/entry.html');
  });

module.exports = router;