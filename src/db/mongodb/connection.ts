import { connect, ConnectOptions } from 'mongoose';

const options: ConnectOptions = {
  autoIndex: true,
  autoCreate: true,
};

const connectDB = (cb: Function) => {
  const mongoCred = {
    user: process.env.MONGODB_USER,
    password: process.env.MONGODB_PASSWORD,
    host: process.env.MONGODB_HOST,
    port: process.env.MONGODB_PORT,
    name: process.env.MONGODB_DBNAME,
  };
  // const MONGO_URI = `mongodb://${mongoCred.user}:${mongoCred.password}@${mongoCred.host}:${mongoCred.port}/${mongoCred.name}`;
  const MONGO_URI = `mongodb://${mongoCred.host}:${mongoCred.port}/${mongoCred.name}`;

  connect(MONGO_URI, options)
    .then(() => {
      cb();
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};

export default connectDB;
