import bcrypt from 'bcrypt';
import User from '../repositories/userRepository';
import { auth } from '../utils/auth';

//after create dependency injectio to all these depnecies
const user = new User();

class UserController {
  async addUser(request, response) {
    const { name, email, password } = request.body;
    console.log('name,email,password', name, email, password);

    if (!email || !password) {
      response.status(400).send('Senha e email não podem estar em branco');
    }
    const userExists = await user.getUserByEmail(email);
    if (userExists) {
      response.status(400).send({ message: 'Usuario Já existe' });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const createdUser = await user.signup({
      name,
      email,
      password: hashedPassword,
    });
    const userToken = await auth.createToken(createdUser);
    return response.status(200).send({ userToken });
  }
}

export default UserController;
