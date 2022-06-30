"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const options = {
    autoIndex: true,
    autoCreate: true,
};
const connectDB = (cb) => {
    const mongoCred = {
        user: process.env.MONGODB_USER,
        password: process.env.MONGODB_PASSWORD,
        host: process.env.MONGODB_HOST,
        port: process.env.MONGODB_PORT,
        name: process.env.MONGODB_DBNAME,
    };
    // ('mongodb://adminrootdb:shoutoutidsukukata123321@159.223.65.0:27017/sqlgenie?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false');
    const MONGO_URI = `mongodb://localhost:27017/bazartechnopreneurship`;
    // const MONGO_URI =
    //   'mongodb://adminrootdb:shoutoutidsukukata123321@159.223.65.0:27017/bazartechnopreneurship?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
    (0, mongoose_1.connect)(MONGO_URI, options)
        .then(() => {
        cb();
    })
        .catch((error) => {
        console.error(error);
        process.exit(1);
    });
};
exports.default = connectDB;
//# sourceMappingURL=connection.js.map