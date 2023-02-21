import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'worktogether',
});

connection.connect((err) => {
  if (err) {
    return err;
  }
});

export default connection;
