const router = require('koa-router')();

router
  .use(
    '/api',
    require('./api').routes()
  )
  .use(
    '/test',
    require('./test').routes()
  );

module.exports = router;