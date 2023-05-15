import { app } from './src/app';
import mongoose from 'mongoose';

const port = process.env.PORT || 3001;
async function start() {
  app.listen(port, () => {
    console.log('listen on port :', port);
  });

  mongoose.connect(process.env.MONGO_URI || 'null').then(() => {
    console.log('Database connection successful');
  });
}

start();
