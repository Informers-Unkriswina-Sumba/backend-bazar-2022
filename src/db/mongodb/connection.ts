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
  // const MONGO_URI = `mongodb://localhost:27017/bazartechnopreneurship`
  // 'mongodb://adminrootdb:shoutoutidsukukata123321@159.223.65.0:27017/bazartechnopreneurship?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

  const MONGO_URI =
    'mongodb+srv://sqlgeniegaspol:2njYQrQYJ4IuAT6i@cluster0.mqiqe.mongodb.net/bazartechnopreneurship?authSource=admin&replicaSet=atlas-13irqk-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true';

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
