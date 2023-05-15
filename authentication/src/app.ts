import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';

const environment_path =
  process.env.NODE_ENV === 'production'
    ? '../.env.production'
    : '../.env.development';
dotenv.config({ path: path.join(__dirname, environment_path) });

/**
 * @DESC: app configuration
 */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('trust proxy', true);

/**
 * @DESC: set headers
 */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

/**
 * @DESC: set cookies
 */
app.use(
  cookieSession({
    signed: false,
    maxAge: 24 * 60 * 60 * 1000, // Oturum süresi (ms cinsinden), burada 24 saat olarak ayarlandı
    secure: false, // Sadece HTTPS üzerinden çalıştığında kullanılmalıdır
    httpOnly: true, // Sadece HTTP üzerinden erişilebilir olmalıdır
    sameSite: 'strict', // Güvenlik açısından sadece aynı site üzerinden erişime izin verilir
  })
);

/**
 * DESC: static files configuration
 */
app.use(express.static(path.join(__dirname, './files')));

/**
 * @DESC: authentication router routes
 */
import { UserAuthenticationRouter } from './router/authentication.router';
app.use(UserAuthenticationRouter);

/**
 * @DESC: user authentication middleware
 */
import { currentUserMiddleware } from './middleware/currentuser.middleware';
app.use(currentUserMiddleware);

/**
 * @DESC: user information router routes
 */
import { UserRouter } from './router/user.router';
app.use(UserRouter);

export { app };
