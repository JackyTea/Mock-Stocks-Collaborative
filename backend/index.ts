import type { ServerToClientEvents, ClientToServerEvents } from './src/interfaces/interfaces.js';
// required packages
import path from 'path';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import type { Server } from 'socket.io';
import type { Socket } from 'socket.io';

// api functions and routes
import stockRoutes from './routes/stocks.js';
import userRoutes from './routes/users.js';
import purchasedStockRoutes from './routes/purchased_stocks.js';
import actionLogRoutes from './routes/action_logs.js';
import transactionRoutes from './routes/transactions.js';
import { tickers } from './web_sockets/tickers.js';

// environment configuration


dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// setup express.js and socket.io
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// express.js configuration
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

// express.js routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/stocks', stockRoutes);
app.use('/user', userRoutes);
app.use('/purchased', purchasedStockRoutes);
app.use('/logs', actionLogRoutes);
app.use('/transactions', transactionRoutes);
app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '../not_found.html'));
});

// socket.io data emission
io.on('connection', (socket: Socket) => {
  tickers(socket);
});

// mongodb and server connections
const PORT = process.env.PORT || 5000;
const CONNECTION_URL =
  process.env.CONNECTION_URL ||
  'mongodb://localhost:27017/mock-stocks-collaborative';

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    server.listen(PORT, () =>
      console.log(`Node.JS Server Running on Port: ${PORT}`)
    )
  )
  .catch((error) => console.log(`An error has occurred: ${error}`));
