import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTransactions } from "@/api/index.js"; //this is the transactions route
/* import {
  GET_ALL_TRANSACTIONS,
  TRANSACTION_ERROR_OCCURRED,
} from '@/constants/actions'; //type aliases */

// initially doesn't have any transactions because we haven't gotten them yet
const initialState = {
  transactions: [],
  status: "idle",
  error: null,
};

//GET /transactions action
// fetch the transaction data if there is transaction data to fetch and return it
export const fetchTransactionsList = createAsyncThunk(
  "transactions/getTransactions",
  async () => {
    const response = await fetchTransactions(); // awaiting getting the route
    return response.data;
  }
);

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    transactionAdded(state, action) {
      state.transactions.push(action.payload);
    },
    prepare(
      transactionId,
      transactionType,
      shares,
      tickerBought,
      transactedAt
    ) {
      return {
        payload: {
          transactionId,
          transactionType,
          shares,
          tickerBought,
          transactedAt,
        },
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchTransactionsList.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message; // payload: error.response.data.message, if no error response: payload: 'Transaction server is down!',
    });
  },
});

export const selectAllTransactions = (state) => state.transactions.transactions;
export const getTransactionsStatus = (state) => state.transactions.status;
export const getTransactionsError = (state) => state.transactions.error;

export const { transactionAdded } = transactionsSlice.actions;

export default transactionsSlice.reducer;
