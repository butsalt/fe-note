const router = require('koa-router')();

router
  .use(
    '/crlf',
    require('./crlf').routes()
  );

module.exports = router;