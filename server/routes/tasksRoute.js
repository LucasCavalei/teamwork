import express from 'express';

import Task from '../repositories/tasksRepository.js';

const taskRoute = express.Router();

const task = new Task();
taskRoute.post('/', task.add);
taskRoute.get('/', task.getAll);
taskRoute.put('/:id', task.update);
taskRoute.delete('/:id', task.delete);

export default taskRoute;
