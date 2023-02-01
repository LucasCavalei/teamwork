import LoadUserByEmailRepository from '../../repository/user/loadByEmailRepository.js';
const loadUserByEmailRepository = new LoadUserByEmailRepository();

class Login {
  async execute(httpResquest) {
    const { email, password } = httpResquest.body;
    if (!email || !password) {
      return {
        statusCode: 400,
        body: 'Senha e email não podem estar em branco',
      };
    }
    const user = await loadUserByEmailRepository.loadByEmail(email, password);
    if (user === null) {
      return {
        statusCode: 400,
        body: 'Usuario não existe',
      };
    }
    return {
      statusCode: 200,
      body: user,
    };
  }
}
export default Login;
