const fs = require('fs');
const path = require('path');

const send = require('koa-send');

module.exports = async function (ctx) {
  const ctxPath = ctx.path;
  const filePath = path.resolve(
    process.cwd() + ctxPath
  );
  // 展示page文件夹下的文件夹或页面
  if (ctxPath.endsWith('/')) {
    // 展示文件夹
    const pages = fs.readdirSync(filePath);
    await ctx.render(
      'folder.tpl',
      {
        isRoot: ctxPath === '/pages/',
        pages,
      }
    );
  } else {
    const stats = fs.statSync(
      path.resolve(
        process.cwd() + ctxPath
      )
    );
    if (stats.isDirectory()) {
      ctx.redirect(ctxPath + '/');
    } else {
      // 展示页面
      await send(
        ctx,
        ctxPath
      );
    }
  }
};