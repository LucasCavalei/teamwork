import dotenv from 'dotenv';
import { app } from './app.js';
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log('8888 port connectado');
});

// db.connect()
//   .then(() => {
//     console.log('Connected to MySQL database');
//   })
//   .catch((err) => {
//     console.error('Failed to connect to MySQL database:', err);
//   });
