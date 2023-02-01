import express from 'express';
import Signup from '../controllers/user/userSignupController.js';
import Login from '../controllers/user/userLoginController.js';
import { expressAdapter } from '../express-adapter.js';
const userRouter = express.Router();

const signup = new Signup();
const login = new Login();
userRouter.post('/signup', expressAdapter(signup));
userRouter.post('/login', expressAdapter(login));

export default userRouter;
