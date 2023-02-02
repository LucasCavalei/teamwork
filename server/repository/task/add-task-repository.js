import bcrypt from 'bcrypt';
import Authorization from '../../auth.js';

class TaskClassRepository {
  // constructor() {
  //   this.authorization = new Authorization();
  // }
  // async createUser({ name, email, password }) {
  //   const userCollection = await MongoHelper.getCollection('user');
  //   const salt = await bcrypt.genSalt(10);
  //   const hashedPassword = await bcrypt.hash(password, salt);
  //   const savedUser = await userCollection.insertOne({
  //     name,
  //     email,
  //     password: hashedPassword,
  //   });
  //   const userToken = await this.authorization.createToken(savedUser);
  //   const newUser = {
  //     token: userToken,
  //     userId: savedUser.insertedId,
  //   };
  //   return newUser;
  // }
}
export default TaskClassRepository;
