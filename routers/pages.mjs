import fs from 'node:fs';
import path from 'node:path'

export default (req, res) => {
  const pagePath = req.path;
  const filePath = path.resolve(
    process.cwd() + '/views' + pagePath
  );

  let stats;
  try {
    stats = fs.statSync(filePath);
  } catch (e) {
    res.sendStatus(404);
    return
  }

  const expectFolder = pagePath.endsWith('/');

  if (stats.isDirectory()) {
    if (expectFolder) {
      // 展示page文件夹下的文件夹或页面
      const pages = fs.readdirSync(filePath);
      res.render(
        'page-list.ejs',
        {
          isRoot: pagePath === '/pages/',
          pages,
        }
      );
    } else {
      res.redirect(pagePath + '/');
    }
  } else {
    if (expectFolder) {
      res.redirect(pagePath.slice(0, -1));
    } else {
      // 展示页面
      res.sendFile(
        filePath
      );
    }
  }
}
