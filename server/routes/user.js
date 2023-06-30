import express from 'express';
import { isUserAuthenticated } from '../middlewares/auth';
const router = express.Router();

router.get('/auth/user', isUserAuthenticated, (req, res) => {
  const { sub, given_name, email, picture } = req.user._json;
  const userData = { sub, given_name, email, picture };
  res.json(userData);
});

export { router };
