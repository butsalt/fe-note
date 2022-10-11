import fs from 'node:fs';
import path from 'node:path';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const { folderPath, fileName } = req.query;
  const filePath = path.resolve(process.cwd() + folderPath + fileName);
  res.set({
    'Content-Disposition': `attachment; filename=${fileName}`,
  });
  res.send(
    fs.readFileSync(filePath)
  );
});

export default router;
