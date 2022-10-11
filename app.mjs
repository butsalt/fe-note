import express from 'express';

import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';

import pagesRouter from './routers/pages.mjs';
import apiRouter from './routers/api/index.mjs';
import testRouter from './routers/test/index.mjs';

const port = 3000;

const app = express();

// request parser
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
  // 用于解析FormDataItem的内容
  defCharset: 'utf8',
  // 用于解析FormDataItem的Content-Disposition头部的内容
  defParamCharset: 'utf8'
}));

// routers
app.use('/api', apiRouter);
app.use('/test', testRouter);
app.get(/^\/page/, pagesRouter);

// static
app.use(
  '/assets',
  express.static('public')
);

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
