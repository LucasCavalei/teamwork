import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'worktogether',
});
export default connection;
// const config = {
//   host: 'localhost',
//   user: 'root',
//   password: '123456',
//   database: 'worktogether',
//                                      };
// const config = {
//   host: 'localhost',
//   user: 'root',
//   password: '123456',
//   database: 'worktogether',
// };
// class MySQL {
//   constructor(config) {
//     this.connection = mysql.createConnection(config);
//   }

//   connect() {
//     return new Promise((resolve, reject) => {
//       this.connection.connect((err) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve();
//         }
//       });
//     });
//   }
//   query(sql, params) {
//     return new Promise((resolve, reject) => {
//       this.connection.query(sql, params, (err, rows) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(rows);
//         }
//       });
//     });
//   }
// }

// const db = new MySQL(config);
// // const db = new MySQL(config);

// ex               port { MySQL, db };

// const db = new MySQL(config);
// db.connect()
//   .then(() => {
//     console.log('Connected to MySQL database');
//   })
//   .catch((err) => {
//     console.error('Failed to connect to MySQL database:', err);
//   });

//   query(sql, params) {
//     return new Promise((resolve, reject) => {
//       this.connection.query(sql, params, (err, rows) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(rows);
//         }
//       });
//     });
//   }
// }
