import express from 'express';
import { isUserAuthenticated } from '../middlewares/auth';
import passport from '../utils/googleAuth';
const router = express.Router();

const successLoginUrl = 'http://localhost:8080/login/success';
const errorLoginUrl = 'http://localhost:8080/login/error';
router.get(
  '/auth/google/callback',

  passport.authenticate('google', {
    failureRedirect: errorLoginUrl,
    successRedirect: successLoginUrl,

    failureRedirect: '/login/failed',
  })
);

router.get('/auth/google', (req, res, next) => {
  console.log('Before passport.authenticate()');
  passport.authenticate('google', {
    scope: ['profile'],
  })(req, res, next);
  console.log('After passport.authenticate()');
});

export { router };
