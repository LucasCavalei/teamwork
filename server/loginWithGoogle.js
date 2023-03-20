import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/vai', function (req, res) {
  res.json('sou vai');
});
// router.get(
//     '/auth/google',
//     passport.authenticate('google', { scope: ['email profile'] })
//   );
// router.get('/login/google', passport.authenticate('google'));
// router.get(
//   'api/session/oauth/google',
//   passport.authenticate('google', {
//     failureRedirect: 'http://localhost:8888/user',
//   }),
//   function (req, res) {
//     // Authenticated successfully
//     res.redirect('/');
//   }
// );

// router.get(
//   '/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function (req, res) {
//     // Authenticated successfully
//     res.redirect('/');
//   }
// );
