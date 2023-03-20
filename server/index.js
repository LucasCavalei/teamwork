import { app } from './app.js';
import { db } from './utils/database';
app.listen(8888, () => {
  console.log('8888 port connectado');
});

// db.connect()
//   .then(() => {
//     console.log('Connected to MySQL database');
//   })
//   .catch((err) => {
//     console.error('Failed to connect to MySQL database:', err);
//   });
