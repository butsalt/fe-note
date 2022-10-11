import express from 'express';

const router = express.Router();

router
  .get('/redirect', (req, res) => {
    res.redirect('/pages/bom/performance/entry.html');
  });

export default router;
