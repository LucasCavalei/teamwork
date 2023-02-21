import connection from '../utils/database';
// import mysql from 'mysql';
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123456',
//   database: 'worktogether',
// });

// connection.connect((err) => {
//   if (err) {
//     return err;
//   }
// });

class Task {
  add(req, res) {
    const { date_time, description } = req.body;

    const INSERT_USER_QUERY = `INSERT INTO task_table (date_time, description) VALUES (?, ?)`;
    connection.query(
      INSERT_USER_QUERY,
      [date_time, description],
      (err, resultados) => {
        if (err) {
          // return res.send(err)
          console.log('sou errros temporary', err);
        } else {
          // return res.send('usuario adicionado com sucesso');
          console.log('FOI TUDO BEM ADDICIONOU');
        }
      }
    );
  }
}
export default Task;
