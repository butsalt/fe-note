const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');

const renderPage = require('./lib/renderPage');

const app = new Koa();

app
  .use(bodyParser())
  .use(
    // 准备页面模板
    views(
      __dirname + '/views',
      {
        map: {
          tpl: 'nunjucks'
        }
      }
    )
  )
  .use(
    async (ctx, next) => {
      const ctxPath = ctx.path;
      if (ctxPath.startsWith('/assets/')) {
        // 静态资源
        await send(
          ctx,
          ctxPath.replace(/^\/assets\//, '/public/')
        );
      } else if (ctxPath.startsWith('/pages')) {
        // 展示page下的文件夹内容或页面
        await renderPage(ctx);
      } else {
        // 使用路由解析
        await next();
      }
    }
  )
  .use(
    // 解释路由
    require('./routes').routes()
  )
  .listen(3000);