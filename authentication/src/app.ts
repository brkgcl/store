import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
import cookieSession from 'cookie-session';
import 'express-async-errors';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('trust proxy', true);

dotenv.config({ path: path.join(__dirname, '../.env') });

app.use(
  cookieSession({
    signed: false,
    maxAge: 24 * 60 * 60 * 1000,
  })
);

/**
 * @Router
 */
import { AuthenticationRouter } from './route/authentication.routes';

app.use('/api', AuthenticationRouter);

export { app };
