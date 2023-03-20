import connection from '../utils/database';

class User {
  async signup({ name, email, password }) {
    const INSERT_USER_QUERY = `INSERT INTO user_table (name, email, password) VALUES (?, ?, ?)`;
    try {
      const result = await new Promise((resolve, reject) => {
        connection.query(
          INSERT_USER_QUERY,
          [name, email, password],
          (err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });

      /*CÓDIGO INTERESSANTE QUE RETORNA DADOS APOS ADD, SEM PRECISAR FAZER SELECT PRA RETORNAR DADOS DO USUARIO ADICIONADO
  const createUser = async (newUser) => {
  const sql = "INSERT INTO users SET ?";
  const result = await query(sql, newUser);
  return { id: result.insertId, ...newUser };
};
*/
      const rows = await new Promise((resolve, reject) => {
        connection.query(
          'SELECT * FROM user_table WHERE id = ?',
          [result.insertId],
          (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
          }
        );
      });
      console.log('added user', rows[0]);
      return rows[0];
    } catch (err) {
      console.log('failed to add user', err);
      throw err;
    }
  }

  login(req, res) {
    const { email, password } = req.body;
    const SELECT_USER_QUERY = `SELECT * FROM user_table WHERE email = ? AND password = ?`;
    try {
      connection.query(SELECT_USER_QUERY, [email, password], (err, rows) => {
        if (err) {
          console.log('failed to login', err);
          return res.send(err);
        } else if (rows.length === 0) {
          console.log('no matching user found');
          return res.send('Invalid email or password');
        } else {
          console.log('logged in as', rows[0]);
          return res.send(rows[0]);
        }
      });
    } catch (err) {
      console.log('Error while logging in:', err);
      //   res.status(500).send('Error while logging in');
    }
  }

  getUserByEmail(email) {
    const FIND_USER_QUERY = `SELECT * FROM user_table WHERE email = ?`;

    return new Promise((resolve, reject) => {
      connection.query(FIND_USER_QUERY, [email], (err, rows) => {
        if (err) {
          console.log('failed to retrieve user', err);
          reject(err);
        } else {
          console.log('retrieved user:', rows[0]);
          resolve(rows[0]);
        }
      });
    });
  }
}
export default User;
// USING COMPARE
//   login(req, res) {
//     const { email, password } = req.body;
//     const SELECT_USER_QUERY = `SELECT * FROM user_table WHERE email = ?`;
//     try {
//       connection.query(SELECT_USER_QUERY, [email], async (err, rows) => {
//         if (err) {
//           console.log('failed to login', err);
//           return res.send(err);
//         } else if (rows.length === 0) {
//           console.log('no matching user found');
//           return res.send('Invalid email or password');
//         } else {
//           const match = await bcrypt.compare(password, rows[0].password);
//           if (match) {
//             console.log('logged in as', rows[0]);
//             return res.send(rows[0]);
//           } else {
//             console.log('password does not match');
//             return res.send('Invalid email or password');
//           }
//         }
//       });
//     } catch (err) {
//       console.log('Error while logging in:', err);
//       //   res.status(500).send('Error while logging in');
//     }
//   }
// }.
