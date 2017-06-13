const Koa = require('koa');
const views = require('koa-views');

const renderPage = require('./lib/renderPage');

const app = new Koa();

// 准备页面模板
app.use(
  views(
    __dirname + '/views',
    {
      map: {
        tpl: 'nunjucks'
      }
    }
  )
);

app.use(async (ctx) => {
  const ctxPath = ctx.path;
  if (ctxPath.startsWith('/assets/')) {
    // 静态资源
    await send(
      ctx,
      ctxPath.replace(/^\/assets\//, '/public/')
    );
  } else if (ctxPath.startsWith('/page')) {
    // 展示page下的文件夹内容或页面
    await renderPage(ctx);
  }
});

app.listen(3000);