import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

class Authorization {
  async createToken(user) {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return token;
  }
  authorize(req, res, next) {
    const authorization = req.headers.authorization;
    if (authorization) {
      const token = authorization.slice(7, authorization.length);
      jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
          res.status(401).send({ message: 'Token invalido' });
        } else {
          req.user = decode;
          next();
        }
      });
    } else {
      res.status(404).send({ message: 'Sem Token' });
    }
  }
  async comparer(user, password) {
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      const acessToken = await this.createToken(user);
      return acessToken;
    }
    return null;
  }
}
export default Authorization;
