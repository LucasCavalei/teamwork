import express from 'express';
import path from 'path';
import cors from 'cors';

import morgan from 'morgan';
import userRoute from './routes/userRoute.js';
import tasksRoute from './routes/tasksRoute.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));

app.use(morgan('tiny'));
app.use('/user', userRoute);
app.use('/tasks', tasksRoute);

export { app };
