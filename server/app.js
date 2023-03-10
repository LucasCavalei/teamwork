import express from 'express';
import path from 'path';
import cors from 'cors';

import morgan from 'morgan';
// import userRouter from './routes/user-route.js';
import taskRouter from './routes/task-router.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));

app.use(morgan('tiny'));

// app.use('/user', userRouter);
app.use('/task', taskRouter);

export { app };
