import { db, MySQL } from '../utils/database';

class Task {
  add(req, res) {
    const { name, description, status } = req.body;
    const INSERT_TASK_QUERY = `INSERT INTO task_table (name, description, status) VALUES (?, ?, ?)`;
    try {
      connection.query(
        INSERT_TASK_QUERY,
        [name, description, status],
        (err, result) => {
          if (err) {
            console.log('nao adicionou', err);
            return res.send(err);
          } else {
            console.log('result in add', result);

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
  update(req, res) {
    console.log('chamoui!');
    const { name, description, status } = req.body;
    const id = req.params.id;
    console.log(name, description, status);
    const query =
      'UPDATE task_table SET name = ?, description = ?, status = ? WHERE id = ?';
    const values = [name, description, status, id];
    connection.query(query, values, (err, result) => {
      if (err) {
        throw err;
      } else {
        console.log('result', result);
        connection.query(
          'SELECT * FROM task_table WHERE id = ?',
          [id],
          (err, rows) => {
            if (err) {
              return res.send(err);
            } else {
              return res.send(rows[0]);
              console.log('EDITOU', rows[0]);
            }
          }
        );
      }
    });
  }
  //   // close the connection to the database
  //   connection.end((err) => {
  //     if (err) throw err;
  //     console.log('Connection closed');
  // },
}
export default Task;
