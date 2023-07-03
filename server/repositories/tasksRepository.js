import connection from '../utils/database';

class Task {
  add(request, response) {
    const { name, description, status } = request.body;
    const INSERT_TASK_QUERY = `INSERT INTO task_table (name, description, status) VALUES (?, ?, ?)`;
    const params = [name, description, status];

    try {
      connection.query(INSERT_TASK_QUERY, params, (err, result) => {
        if (err) {
          return response.send(err);
        } else {
          console.log('result in add', result.insertId);

          connection.query(
            'SELECT * FROM task_table WHERE id = ?',
            [result.insertId],
            (err, rows) => {
              if (err) {
                return response.send(err);
              } else {
                return response.send(rows[0]);
              }
            }
          );
        }
      });
    } catch (err) {
      response.status(500).send('Error while adding task');
    }
  }

  getAll(req, res) {
    connection.query('SELECT * FROM task_table', (err, result) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(result);
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
            }
          }
        );
      }
    });
  }
  delete(req, res) {
    const id = req.params.id;
    const DELETE_TASK_QUERY = 'DELETE FROM task_table WHERE id = ?';

    try {
      connection.query(DELETE_TASK_QUERY, [id], (err, result) => {
        if (err) {
          return res.send(err);
        } else {
          console.log('Deleted task with ID:', id);
          return res.send(`Task with ID ${id} deleted successfully.`);
        }
      });
    } catch (err) {
      res.status(500).send('Error while deleting task');
    }
  }
}
export default Task;
