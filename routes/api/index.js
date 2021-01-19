const router = require('koa-router')();

router
  .use(
    '/method',
    require('./method').routes()
  )
  .use(
    '/cookie',
    require('./cookie').routes()
  )
  .use(
    '/download',
    require('./download').routes()
  )
  .use(
    '/upload',
    require('./upload').routes()
  )
  .use(
    '/performance',
    require('./performance').routes()
  );

module.exports = router;