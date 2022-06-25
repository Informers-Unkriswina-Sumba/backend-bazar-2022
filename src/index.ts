import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import http from 'http';
import https from 'https';
import { Request, Response, NextFunction } from 'express';
import logger from './helpers/Logger';
import Debug from 'debug';
const debug = Debug('backend-cmspmkkotawaingapu:server');
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './db/mongodb/connection';
import apiRouter from './routes';
// import { createPelapakSeeds } from './db/mongodb/seeds/pelapak';
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

dotenv.config();

// init express app
const app = express();

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Init MongoDB
connectDB(() => {
  console.log('Successfully connected to database');
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
app.use('/uploads', express.static('uploads'));

// Morgan morgan
app.use(
  morgan('dev', {
    stream: {
      write: (log) =>
        logger.info(log.substring(0, log.lastIndexOf('\n')), 'morgan-http'),
    },
  })
);

// Cors enable (include before routes)
app.use(cors());

// Protection http using helmet
app.use(helmet());

// Mount routes
app.use('/api', apiRouter);

// 404
app.get('*', (req: Request, res: Response) => {
  res.status(404).send({
    success: false,
    data: null,
    message: 'Page Not found',
  });
});

// error handler
app.use(
  async (err: Error | any, req: Request, res: Response, next: NextFunction) => {
    const isDev =
      process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === 'staging';
    // set locals, only providing error in development
    // res.locals.message = err.message;
    // res.locals.error = isDev ? err : {};

    logger.error(err, 'general-error');
    // render the error page
    res.status(err.status || 500);
    res.send({
      success: false,
      data: null,
      message: isDev ? err.message : 'Ooops ada kesalahan pada sistem.',
    });
  }
);

// Listen
const port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

if (process.env.NODE_ENV === 'development') {
  // const httpsServer = https.createServer(app);
  const httpsServer = http.createServer(app);

  httpsServer.listen(port, () => {
    const addr = httpsServer.address();
    const bind =
      typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug(`Listening on ${bind}`);
    logger.info(
      [
        `🚀 Server start on port ${port}`,
        `Running with ${process.env.NODE_ENV} environment...`,
      ],
      'app-startup'
    );
  });
  console.log('\nserver running on port ', port);
  httpsServer.on('error', onError);
} else {
  const server = http.createServer(app);
  server.listen();
  console.log('Running on', server.address());
  server.on('error', onError);
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val: any) {
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

function onError(error: any) {
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
