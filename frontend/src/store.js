import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth"
import {  authErrorsReducer,
  marketErrorsReducer,
  purchasedErrorsReducer,
  userErrorsReducer,
  transactionErrorsReducer,
  logsErrorsReducer } from "./reducers/error";
import logsReducer from "./reducers/logs";
import purchasedReducer from "./reducers/purchased";
import stocksReducer from "./reducers/stocks";
import transactionsReducer from "./reducers/transactions";

const combinedReducer = combineReducers({
  auth: authReducer,
  authErrors: authErrorsReducer,
  marketErrors: marketErrorsReducer,
  purchasedErrors: purchasedErrorsReducer,
  userErrors: userErrorsReducer,
  transactionErrors: transactionErrorsReducer,
  logsErrors: logsErrorsReducer,
  logs: logsReducer,
  purchased: purchasedReducer,
  stocks: stocksReducer,
  transactions: transactionsReducer,
})

export default configureStore({
  reducer: combinedReducer,
});

