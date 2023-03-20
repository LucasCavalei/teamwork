import express, { Router } from 'express';

import Task from '../repositories/tasksRepository.js';

const taskRoute = express.Router();

const task = new Task();
taskRoute.post('/', task.add);
taskRoute.get('/', task.getAll);
taskRoute.put('/:id', task.update);


export default taskRoute;
