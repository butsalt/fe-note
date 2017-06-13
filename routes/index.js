const Router = require('koa-router');

const router = new Router({
  prefix: '/api'
});

router
  .use(
    '/method',
    require('./method').routes()
  )
  .use(
    '/cookie',
    require('./cookie').routes()
  );

module.exports = router;