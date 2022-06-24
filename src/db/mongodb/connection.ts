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

  // ('mongodb://adminrootdb:shoutoutidsukukata123321@159.223.65.0:27017/sqlgenie?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false');
  // const MONGO_URI = `mongodb://${mongoCred.user}:${mongoCred.password}@${mongoCred.host}:${mongoCred.port}/${mongoCred.name}`;

  const MONGO_URI =
    'mongodb://adminrootdb:shoutoutidsukukata123321@159.223.65.0:27017/bazartechnopreneurship?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

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
