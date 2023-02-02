import express from 'express';
import Signup from '../usecases/signup-user';
import Login from '../usecases/login-user';
import { expressAdapter } from '../express-adapter';
const userRouter = express.Router();

const signup = new Signup();
const login = new Login();
userRouter.post('/signup', expressAdapter(signup));
userRouter.post('/login', expressAdapter(login));

export default userRouter;
