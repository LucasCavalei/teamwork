import dotenv from 'dotenv';
import { app } from './app.js';
dotenv.config();

app.listen(process.env.PORT, () => {
  console.log('8888 port connectado');
});
