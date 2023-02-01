import Authorization from '../../auth.js';
// const authorization = new Authorization();

class LoadUserByEmailRepository {
  //   constructor() {
  //     this.authorization = new Authorization();
  //   }
  //   async loadByEmail(email, password) {
  //     const userCollection = await MongoHelper.getCollection('user');
  //     const user = await userCollection.findOne({ email });
  //     if (!user) return null;
  //     const userToken = await this.authorization.comparer(user, password);
  //     const newUser = {
  //       token: userToken,
  //       userId: user._id,
  //     };
  //     return newUser;
  //   }
  //   async findUser(email) {
  //     const userCollection = await MongoHelper.getCollection('user');
  //     const user = await userCollection.findOne({ email });
  //     return user;
  //   }
}
export default LoadUserByEmailRepository;
