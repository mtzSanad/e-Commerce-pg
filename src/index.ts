import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import error_middleware from './middleware/error.middleware';
import config from './config';
import database from './database';

const PORT = config.PORT;

const app: Application = express();

//Middlewares
//JSon middleware
app.use(express.json());

//Logging Middleware
app.use(morgan('common'));

//Helmet Security
app.use(helmet());

//Ratelimit
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: 'Excced limit',
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

//Database test
database.connect().then((client) => {
  client
    .query('Select now()')
    .then((res) => {
      console.log('=================>' + JSON.stringify(res.rows));
      client.release();
    })
    .catch((error) => {
      console.log(error);
      client.release();
    });
});

//Adding route
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello 🤖',
  });
});

app.post('/', (req: Request, res: Response) => {
  throw new Error('asdfasd');
  console.log(req.body);

  res.json({
    data: req.body,
  });
});

//Error midleware
app.use(error_middleware);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'not found!' });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});

export default app;
