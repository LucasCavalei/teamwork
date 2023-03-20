import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import express from 'express';
i;
import { app } from '../app';
//   MINHA  'http://localhost:8888/api/session/oauth/google'
// const GOOGLE_CLIENT_ID =
//   '700452773389-6pcr1neof2gv152ifnl3consi7rc4fdt.apps.googleusercontent.com';
// const GOOGLE_CLIENT_SECRET = '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';

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       // callbackURL: 'https://www.example.com/oauth2/redirect/google',
//       callbackURL: 'http://localhost:8888/auth/google/callback',
//       // callbackURL: "http://127.0.0.1:1337/api/session/oauth/google",
//       scope: ['profile'],
//       state: true,
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log('Google OAuth strategy called with profile:', profile);
//     }
//   )
// );

// passport.serializeUser(function(user, cb) {
//   process.nextTick(function() {
//     cb(null, { id: user.id, username: user.username, name: user.name });
//   });
// });
// passport.deserializeUser(function(user, cb) {
//   process.nextTick(function() {
//     return cb(null, user);
//   });
// });

// var router = express.Router();
// router.get('/oauth2/redirect/google', passport.authenticate('google', {
//   successReturnToOrRedirect: '/',
//   failureRedirect: '/login'
// }));
// router.get('/login/federated/google', passport.authenticate('google'));

// router.get('/oauth2/redirect/google', passport.authenticate('google', {
//   successReturnToOrRedirect: '/',
//   failureRedirect: '/login'
// }));
// router.post('/logout', function(req, res, next) {
//   req.logout();
//   res.redirect('/');
// });

// export { passport,router };
// app.get(
//   '/login/google',
//   passport.authenticate('google', { scope: ['email', 'profile'] })
// );
// app.get('/login/google', passport.authenticate('google'));
// app.get(
//   'api/session/oauth/google',
//   passport.authenticate('google', {
//     failureRedirect: 'http://localhost:8888/user',
//   }),
//   function (req, res) {
//     // Authenticated successfully
//     res.redirect('/');
//   }
// );

// app.get(
//   '/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   function (req, res) {
//     // Authenticated successfully
//     res.redirect('/');
//   }
// );

//   const google_id = profile.id;
//   const email = profile.emails[0].value;
//   const display_name = profile.displayName;
//   const first_name = profile.first;
//   const last_name = profile.last;
//   connection.query('SELECT * FROM google_users WHERE google_id = ?', [google_id], (err, rows) => {
//     if (err) return done(err);
//     if (rows.length) {
//       return done(null, rows[0]);
//     } else {
//       // Insert new user into database
//       const newUser = { google_id,email,display_name,first_name,last_name };
//       connection.query('INSERT INTO google_users SET ?', newUser, (err, result) => {
//         if (err) throw err;
//         newUser.id = result.insertId;
//         return done(null, newUser);
//       });
//     }
//   });
// }));

// function verify(accessToken, refreshToken, profile, cb) {
//   db.get('SELECT * FROM federated_credentials WHERE provider = ? AND subject = ?', [
//     'https://accounts.google.com',
//     profile.id
//   ], function(err, cred) {
//     if (err) { return cb(err); }

//     if (!cred) {
//       // The account at Google has not logged in to this app before.  Create a
//       // new user record and associate it with the Google account.
//       db.run('INSERT INTO users (name) VALUES (?)', [
//         profile.displayName
//       ], function(err) {
//         if (err) { return cb(err); }

//         var id = this.lastID;
//         db.run('INSERT INTO federated_credentials (user_id, provider, subject) VALUES (?, ?, ?)', [
//           id,
//           'https://accounts.google.com',
//           profile.id
//         ], function(err) {
//           if (err) { return cb(err); }
//           var user = {
//             id: id,
//             name: profile.displayName
//           };
//           return cb(null, user);
//         });
//       });
//     } else {
//       // The account at Google has previously logged in to the app.  Get the
//       // user record associated with the Google account and log the user in.
//       db.get('SELECT * FROM users WHERE id = ?', [ cred.user_id ], function(err, row) {
//         if (err) { return cb(err); }
//         if (!row) { return cb(null, false); }
//         return cb(null, row);
//       });
//     }
//   });
// }
// ));
