import express from 'express';

import userRouter from './user';

const router = express.Router();

router.use('/user', userRouter)

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('test111')
});

export default router