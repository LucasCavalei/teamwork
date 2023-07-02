import express from 'express';
import { isUserAuthenticated } from '../middlewares/auth';
const router = express.Router();

router.get('/auth/user', isUserAuthenticated, (req, res) => {
  const { firstName, fullName, email, picture } = req.user;

  const user = {
    firstName,
    fullName,
    email,
    picture,
  };

  res.json(user);
});

export { router };
