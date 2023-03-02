import connection from '../utils/database';
import mysql from 'mysql';
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
    const { date_time, description, status } = req.body;
    console.log('----chega??=-----', description, date_time, status);
    const INSERT_TASK_QUERY = `INSERT INTO task_table (date_time, description, status) VALUES (?, ?, ?)`;
    try {
      connection.query(
        INSERT_TASK_QUERY,
        [date_time, description, status],
        (err, result) => {
          if (err) {
            console.log('nao adicionou', err);
            return res.send(err);
          } else {
            connection.query(
              'SELECT * FROM task_table WHERE id = ?',
              [result.insertId],
              (err, rows) => {
                if (err) {
                  console.log('erro ao recuperar tarefa', err);
                  return res.send(err);
                } else {
                  console.log('adicionou', rows[0]);
                  return res.send(rows[0]);
                }
              }
            );
          }
        }
      );
    } catch (err) {
      console.log('Error while adding task:', err);
      //   res.status(500).send('Error while adding task');
    }
  }

  getAll(req, res) {
    connection.query('SELECT * FROM task_table', (err, resultados) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(resultados);
      }
    });
  }
}
export default Task;
