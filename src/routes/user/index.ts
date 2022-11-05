import express from 'express';

const userRouter = express.Router();

/* GET home page. */
userRouter.get('/', (req, res, next) => {
  res.send('userRouter')
});

export default userRouter