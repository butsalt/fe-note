import express from 'express';
import cookieRouter from './cookie.mjs';
import downloadRouter from './download.mjs';
import methodRouter from './method.mjs';
import performanceRouter from './performance.mjs';
import uploadRouter from './upload.mjs'

const router = express.Router();

router.use('/cookie', cookieRouter);
router.use('/download', downloadRouter);
router.use('/method', methodRouter);
router.use('/performance', performanceRouter);
router.use('/upload', uploadRouter);

export default router;
