import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import dotenv from 'dotenv';

dotenv.config();
import connection from './database';

passport.serializeUser(function (user, done) {
  done(null, user);
});
// deserializeUser, para ser usada e fuincionar depende de...
// const isAuthenticated = (req, res, next)
passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8888/auth/google/callback',
      scope: ['profile'],
      state: true,
    },
    (accessToken, refreshToken, profile, done) => {
      const defaultUser = {
        firstName: profile.name.givenName,
        fullName: `${profile.name.givenName} ${profile.name.familyName}`,
        email: profile.emails[0].value,
        picture: profile.photos[0].value,
        googleId: profile.id,
      };

      const selectQuery = 'SELECT * FROM google_users WHERE googleId = ?';
      connection.query(selectQuery, [profile.id], async (error, results) => {
        if (error) {
          console.log('Error signing up', error);
          return done(error, null);
        }

        if (results.length > 0) {
          // User already exists, return the user
          console.log(
            'user  results[0] encontrado oara serealizar',
            results[0]
          );
          return done(null, results[0]);
        } else {
          const insertQuery = 'INSERT INTO google_users SET ?';
          connection.query(insertQuery, defaultUser, (error, result) => {
            if (error) {
              console.log('Error signing up', error);
              return done(error, null);
            }

            const newUser = { ...defaultUser, id: result.insertId };
            return done(null, newUser);
          });
        }
      });
    }
  )
);

export default passport;
