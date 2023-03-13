import express, { Router } from 'express';

import Task from '../repositories/tasksRepository.js';

const taskRoute = express.Router();

const task = new Task();
taskRoute.post('/', (request, response) => {
  task.add(request, response);
});
taskRoute.get('/', (request, response) => {
  task.getAll(request, response);
});
taskRoute.put('/:id', (request, response) => {
  task.update(request, response);
});

export default taskRoute;
