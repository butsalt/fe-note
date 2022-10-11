import fs from 'node:fs';
import path from 'node:path';
import express from 'express';

const router = express.Router();

const sampleNameList = ['linux', 'osx', 'win'];

router.get('/', (req, res) => {
  const resultList = sampleNameList
    .map(sampleName => {
      const fileUrl = new URL(`./samples/${sampleName}`, import.meta.url);
      const buf = fs.readFileSync(fileUrl);

      return `${sampleName}:${buf.toString('hex').replace(/(?=^)(\w{2})/, '$1 ')}`;
    });

  res.render(
    'result-list.ejs',
    {
      resultList,
    }
  );
});

export default router;
