import UserController from '../controllers/userSignupController';
import express from 'express';
import passport from 'passport';
import { success } from 'update/lib/utils';

const userRoute = express.Router();
const userController = new UserController();

userRoute.post('/signup', (request, response) => {
  return userController.addUser(request, response);
});
/*ROTA TEMPORARIA APENAS PARA ENCONTAR O GOOGLE*/
/*DEPOIS APAGAR O IMPORT PASSPORT*/

const successLoginUrl = 'http://localhost:8080/login/success';
const errorLoginUrl = 'http://localhost:8080/login/error';

// userRoute('/teste', (req, res) => {
//   res.json({ message: 'sou rota user teste' });
// });
// userRoute.get(
//   'login/google',
//   passport.authenticate('google', { scope: ['profile', 'email'] })
// );
// userRoute.get(
//   'http://localhost:8888/api/session/oauth/google',
//   passport.authenticate('google', {
//     failureMessage: 'Não logou com Google, por favor tente mais tarde!',
//     failureRedirect: errorLoginUrl,
//     successRedirect: successLoginUrl,
//   }),
//   (req, res) => {
//     console.log('User:', req.user);
//     res.send('Obrigado por estar aqui!');
//   }
// );
// userRoute.post('/login', user.login);
userRoute.get('/', (req, res) => {
  res.json({ message: 'Hello World user route!' });
});
export default userRoute;
