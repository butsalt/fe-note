import express from 'express';

const router = express.Router();

router.get('/long-time.css', async (req, res) => {
  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });

  res.set('Content-Type', 'text/css');
  res.send('div { font-size: 100px; }');
});

export default router;
