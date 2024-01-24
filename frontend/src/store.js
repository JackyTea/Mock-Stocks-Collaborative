import { configureStore } from "@reduxjs/toolkit";
import stocksReducer from './components/Markets/stocksSlice.js';
import transactionsReducer from '../src/components/Dashboard/Transactions/transactionsSlice.js';
import authReducer from '../src/components/Auth/authSlice';

export const store = configureStore({
    reducer: {
      stocks: stocksReducer,
      transactions: transactionsReducer,
      authReducer: authReducer
    }
})