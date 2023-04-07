import UserController from '../controllers/userSignupController';
import express from 'express';

const userRoute = express.Router();
const userController = new UserController();

userRoute.post('/signup', (request, response) => {
  return userController.addUser(request, response);
});

export default userRoute;
