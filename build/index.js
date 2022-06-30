"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const Logger_1 = __importDefault(require("./helpers/Logger"));
const debug_1 = __importDefault(require("debug"));
const debug = (0, debug_1.default)('backend-cmspmkkotawaingapu:server');
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const connection_1 = __importDefault(require("./db/mongodb/connection"));
const routes_1 = __importDefault(require("./routes"));
// import { createLapakSeeds } from './db/mongodb/seeds/lapak';
// import { createProdukKelompok2Seeds } from './db/mongodb/seeds/lapak/kelompok2/produk';
// import { createProdukKelompok3Seeds } from './db/mongodb/seeds/lapak/kelompok3/produk';
// import { createProdukKelompok1Seeds } from './db/mongodb/seeds/lapak/kelompok1/produk';
// import { createProdukKelompok4Seeds } from './db/mongodb/seeds/lapak/kelompok4/produk';
// import { createProdukKelompok8Seeds } from './db/mongodb/seeds/lapak/kelompok8/produk';
// import { createProdukKelompok10Seeds } from './db/mongodb/seeds/lapak/kelompok10/produk';
// import { createProdukKelompok6Seeds } from './db/mongodb/seeds/lapak/kelompok6/produk';
// import { createProdukKelompok5Seeds } from './db/mongodb/seeds/lapak/kelompok5/produk';
// import { createProdukKelompok7Seeds } from './db/mongodb/seeds/lapak/kelompok7/produk';
// import { createProdukKelompok9Seeds } from './db/mongodb/seeds/lapak/kelompok9/produk';
dotenv_1.default.config();
// init express app
const app = (0, express_1.default)();
// Body parser
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
// Init MongoDB
(0, connection_1.default)(() => {
    console.log('Successfully connected to database');
    // sendAllPelapakCredentialAccount();
    // createPelapakSeeds();
    // createLapakSeeds();
    // createProdukKelompok1Seeds();
    // createProdukKelompok2Seeds();
    // createProdukKelompok3Seeds();
    // createProdukKelompok4Seeds();
    // createProdukKelompok8Seeds();
    // createProdukKelompok10Seeds();
    // createProdukKelompok6Seeds();
    // createProdukKelompok5Seeds();
    // createProdukKelompok7Seeds();
    // createProdukKelompok9Seeds();
});
// Set Public Folder
app.use('/uploads', express_1.default.static('uploads'));
// Morgan morgan
app.use((0, morgan_1.default)('dev', {
    stream: {
        write: (log) => Logger_1.default.info(log.substring(0, log.lastIndexOf('\n')), 'morgan-http'),
    },
}));
// Cors enable (include before routes)
app.use((0, cors_1.default)());
// Protection http using helmet
app.use((0, helmet_1.default)());
// Mount routes
app.use('/api', routes_1.default);
// 404
app.get('*', (req, res) => {
    res.status(404).send({
        success: false,
        data: null,
        message: 'Page Not found',
    });
});
// error handler
app.use((err, req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const isDev = process.env.NODE_ENV === 'development' ||
        process.env.NODE_ENV === 'staging';
    // set locals, only providing error in development
    // res.locals.message = err.message;
    // res.locals.error = isDev ? err : {};
    Logger_1.default.error(err, 'general-error');
    // render the error page
    res.status(err.status || 500);
    res.send({
        success: false,
        data: null,
        message: isDev ? err.message : 'Ooops ada kesalahan pada sistem.',
    });
}));
// Listen
const port = normalizePort(process.env.PORT || '8080');
app.set('port', port);
if (process.env.NODE_ENV === 'development') {
    // const httpsServer = https.createServer(app);
    const httpsServer = http_1.default.createServer(app);
    httpsServer.listen(port, () => {
        const addr = httpsServer.address();
        const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
        debug(`Listening on ${bind}`);
        Logger_1.default.info([
            `🚀 Server start on port ${port}`,
            `Running with ${process.env.NODE_ENV} environment...`,
        ], 'app-startup');
    });
    console.log('\nserver running on port ', port);
    httpsServer.on('error', onError);
}
else {
    const server = http_1.default.createServer(app);
    server.listen();
    console.log('Running on', server.address());
    server.on('error', onError);
}
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
//# sourceMappingURL=index.js.map