import express from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import userRoute from './routes/userRoute.js';
import tasksRoute from './routes/tasksRoute.js';
import passport from 'passport';
import session from 'express-session';
import { router as authUser } from './routes/user';
import { router as loginWithGoogleRouter } from './routes/loginWithGoogle';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.session());
// DEPOIS TENTAR SUBSTITUIR ESSE DE CIMA  POR ESSE ABAIXO
app.use(loginWithGoogleRouter);
app.use(authUser);
app.use(express.static(path.join(__dirname, '../dist')));
// app.use(
//   cors({
//     origin: 'https://localhost:8080',
//     methods: 'GET,POST,PUT,DELETE',
//     credentials: true,
//   })
// );
app.use(morgan('tiny'));
app.use('/user', userRoute);
app.use('/tasks', tasksRoute);

export { app };
