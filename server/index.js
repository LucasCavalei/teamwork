import { app } from './app.js';

app.listen(8888, () => {
  console.log('8888 port connectado');
});

// MongoHelper.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(console.log('connected database success'))

//   .catch((err) => console.log('fail to connecta to database', err));
