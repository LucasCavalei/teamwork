import express, { Router } from 'express';

import Task from '../repositories/task-repository.js';

const taskRouter = express.Router();

const task = new Task();
taskRouter.post('/', task.add);

export default taskRouter;
