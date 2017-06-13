const Router = require('koa-router');

const router = new Router({
  prefix: '/api'
});

router.use(
  '/method',
  require('./method').routes()
);

module.exports = router;