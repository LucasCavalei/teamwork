import bcrypt from 'bcrypt';
import User from '../repositories/userRepository';

//AFTER i CAN CREATE SOMETHING LIKE HOLDS THIS , LIKE WE HAVE IN CLEAR ARCHITECTURE
const user = new User();

class UserController {
  async addUser(request, response) {
    const { name, email, password } = request.body;

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
    response.status(200).send(createdUser);
  }
}

export default UserController;
