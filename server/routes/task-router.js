import express from 'express';
import { expressAdapter } from '../express-adapter.js';
import Task from '../usecases/add-task.js';
const taskRouter = express.Router();

const task = new Task();

taskRouter.post('/task', expressAdapter(task));

export default taskRouter;
