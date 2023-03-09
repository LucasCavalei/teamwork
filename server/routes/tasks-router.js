import express, { Router } from 'express';

import Task from '../repositories/tasks-repository.js';

const taskRouter = express.Router();

const task = new Task();
taskRouter.post('/', task.add);
taskRouter.get('/', task.getAll);
taskRouter.put('/:id', task.update);

export default taskRouter;
