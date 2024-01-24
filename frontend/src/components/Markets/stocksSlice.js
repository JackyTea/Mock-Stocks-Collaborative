import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchStocks, fetchStock } from "@/api/index.js";
import axios from 'axios';

// axios instance
export const api = axios.create({ baseURL: import.meta.env.VITE_STOCKS_API });


// GET /stocks
export const getStocks = createAsyncThunk(api.get('/stocks'), async () => {
  const response = await api.get('/stocks');
  console.log(response.data)
  return response.data;
});

export const getStock = createAsyncThunk("/stocks/${id}", async () => {
  const response = await fetchStock(id);
  return response.data;
});

const initialState = {
  stocks: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// **** REDUCER **** //

const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {
    stockAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(id, name, ticker, currentPrice) {
        return {
          payload: {
            id,
            name,
            ticker,
            currentPrice,
          },
        };
      },
      extraReducers(builder) {
        builder
          .addCase(getStocks.fulfilled, (state, action) => {
            state.status = "succeeded";
            return action.payload;
          })
          .addCase(getOneStock.fulfilled, (state, action) => {
            state.status = "succeeded";
            return action.payload;
          })
          .addCase(sortStocksByField.fulfilled, (state, action) => {
            state.status = "succeeded";
            return stocks.slice().sort((a, b) => {
              if (action.payload.reverse) {
                return a[action.payload.field] > b[action.payload.field]
                  ? 1
                  : b[action.payload.field] > a[action.payload.field]
                  ? -1
                  : 0;
              } else {
                return a[action.payload.field] < b[action.payload.field]
                  ? 1
                  : b[action.payload.field] < a[action.payload.field]
                  ? -1
                  : 0;
              }
            });
          })
          .addCase(getStocks.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message; // payload: error.response.data.message, if no error response: payload: 'Markets server is down!',
          })
          .addCase(getStock.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message; // payload: error.response.data.message, if no error response: payload: 'Markets server is down!',
          });
      },
    },
  },
});

export const getStocksList = (state) => state.stocks.stocks;
export const getStocksStatus = (state) => state.stocks.status;
export const getStocksError = (state) => state.error;

export const { stockAdded } = stocksSlice.actions;

export default stocksSlice.reducer;
