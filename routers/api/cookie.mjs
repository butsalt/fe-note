import express from 'express';

const router = express.Router();

router.get('/get', (req, res) => {
  res.send(`
    console.log('name: ${req.cookies.name}');
  `)
});

router.get('/set', (req, res) => {
  res.cookie(
    'name',
    'butSalt',
    {
      maxAge: 30 * 60 * 1000,
      path: '/',
    }
  );

  res.send(`
    console.log('set cookie: name=butSalt');
  `)
});

export default router;
