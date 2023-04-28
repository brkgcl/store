import { app } from './app';
import mongoose from 'mongoose';
import { config } from './environment/development.config';

const start = async () => {
  try {
    mongoose
      .connect(config.db.uri)
      .then(() => {
        console.log(`${config.name} database connected`);
      })
      .catch((err) => console.error(err));
  } catch (error) {
    console.log(`${config.name} database connection error:`, error);
  }

  await app.listen(config.port, () => {
    console.log(`${config.name} is running on port ${config.port}`);
  });
};

start();
