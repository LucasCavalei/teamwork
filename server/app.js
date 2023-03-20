import express from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import userRoute from './routes/userRoute.js';
import tasksRoute from './routes/tasksRoute.js';
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import session from 'express-session';
// import { passport } from '../server/utils/googleAuth';

passport.serializeUser(function (user, done) {
  // done(null, user.id);
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  // Users.findById(obj, done);
  done(null, obj);
});

const GOOGLE_CLIENT_ID =
  '700452773389-6pcr1neof2gv152ifnl3consi7rc4fdt.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      // callbackURL: 'https://www.example.com/oauth2/redirect/google',
      callbackURL: 'http://localhost:8888/auth/google/callback',
      // callbackURL: "http://127.0.0.1:1337/api/session/oauth/google",
      scope: ['profile'],
      state: true,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('Google OAuth strategy called with profile:', profile);
    }
  )
);

/*EXPRESSS--------------------------*/
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));

app.use(
  session({
    secret: 'your-secret-key-here',
    resave: false,
    saveUninitialized: false,
  })
);

app.get('/', (req, res) => {
  res.send(
    '<a href="http://localhost:8888/auth/google">Autentique com Google</a>'
  );
});
// app.get(
//   '/auth/google',
//   passport.authenticate('google', { scope: ['email', 'profile'] })
// );
app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    // failureRedirect: '/login'
  }),
  function (req, res) {
    // Authenticated successfully
    res.redirect('/');
  }
);

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['openid email profile'] })
);

// app.get('/account', ensureAuthenticated, function(req, res) {
//   res.render('account', {
//     user: req.user
//   });
// })

app.use(morgan('tiny'));
app.use('/user', userRoute);
app.use('/tasks', tasksRoute);
app.use(passport.initialize());
app.use(passport.session());

export { app };
