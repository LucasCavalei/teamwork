import CreateUserRepository from '../repository/user/create-user-repository.js';
import LoadUserByEmailRepository from '../repository/user/load-By-Email-Repository.js';
const loadUserByEmailRepository = new LoadUserByEmailRepository();
const createUserRepository = new CreateUserRepository();

class Signup {
  async execute(httpResquest) {
    // não estou fazenodo uso do name, depois excluir
    const { name, email, password } = httpResquest.body;
    if (!email || !password) {
      return {
        statusCode: 400,
        body: 'Senha e email não podem estar em branco',
      };
    }
    //   const userExists = await loadUserByEmailRepository.findUser(email);
    //   if (userExists) {
    //     return {
    //       statusCode: 400,
    //       body: 'Usuario ja existe',
    //     };
    //   }
    //   const newUser = await createUserRepository.createUser({
    //     name,
    //     email,
    //     password,
    //   });
    //   return {
    //     statusCode: 200,
    //     body: newUser,
    //   };
  }
}
export default Signup;
