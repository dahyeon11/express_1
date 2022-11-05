import express, { Request, Response, NextFunction } from 'express';
import router from './routes'

const app = express();

app.use('/', router)

app.get('/ishealthy', (req: Request, res: Response, next: NextFunction) => {
    res.send('welcome!');
});

app.listen('1234', () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  ################################################
`);
});