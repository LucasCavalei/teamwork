import axios from 'axios';

const API_BASE_URL = 'http://localhost:8888';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

async function getAllTasks() {
  const response = await api.get('/tasks');
  return response.data;
}

async function createTask(task) {
  const response = await api.post('/tasks', task);
  return response.data;
}

async function updateTask(task) {
  const response = await api.put(`/tasks/${task.id}`, task);
  return response.data;
}

async function deleteTask(taskId) {
  const response = await api.delete(`/tasks/${taskId}`);
  return response.data;
}

const taskService = {
  getAll: getAllTasks,
  create: createTask,
  update: updateTask,
  delete: deleteTask,
};

export default taskService;
