import express from 'express';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send(`
      GET: ${req.query.msg}
    `)
  })
  .post((req, res) => {
    res.send(`
      POST: ${req.body.msg}
    `)
  })

export default router;
