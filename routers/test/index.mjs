import express from 'express';
import crlfRouter from './crlf/index.mjs'

const router = express.Router();

router
  .use(
    '/crlf',
    crlfRouter
  );

export default router;
