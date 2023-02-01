import express from 'express';
import path from 'path';
import cors from 'cors';

import morgan from 'morgan';
import userRouter from './routes/userRoute.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));

app.use(morgan('tiny'));

app.use('/user', userRouter);
export { app };
