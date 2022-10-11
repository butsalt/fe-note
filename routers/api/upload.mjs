import express from 'express';

const router = express.Router();

router
  .post('/', async (req, res) => {
    const files = req.files || {};

    const fieldList = Object.keys(files);

    const filesJson = fieldList.map(field => {
      const file = files[field]

      return {
        field,
        file: file.name,
        size: file.size,
      }
    });

    res.json({
      files: filesJson
    });
  });

export default router;
