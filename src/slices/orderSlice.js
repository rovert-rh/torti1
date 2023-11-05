import { createSlice } from "@reduxjs/toolkit";
import { getOrder, getOrderById, saveOrder } from "../actions/orderAction";

const initialState = {
  loading: false,
  errores: [],
  order: null,
  isUpdated: false,
  paymentIntentId: "",
  clientSecret: "",
  stripeApiKey: "",
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetUpdateStatus: (state, action) => {
      state.isUpdated = false;
    },
  },
  extraReducers: {
    [saveOrder.pending]: (state) => {
      state.message = null;
      state.errores = null;
      state.loading = true;
    },
    [saveOrder.fulfilled]: (state, { payload }) => {
      state.order = payload;
      state.errores = null;
      state.loading = false;
      state.isUpdated = true;
      state.paymentIntentId = payload.paymentIntentId;
      state.clientSecret = payload.clientSecret;
      state.stripeApiKey = payload.stripeApiKey;
    },
    [saveOrder.rejected]: (state, action) => {
      state.message = null;
      state.errores = action.payload;
      state.loading = true;
    },
    [getOrder.pending]: (state) => {
      state.loading = true;
      state.error = null;    
    },
    [getOrder.fulfilled]: (state, {payload})=> {
      state.loading=false;
      state.products = payload.data;
      state.error=null;
    },
    [getOrder.rejected]: (state, action) => {
      state.loading = false;
      state.error= action.payload;
    },

  },
});

export const {resetUpdateStatus} = orderSlice.actions;
export const orderReducer = orderSlice.reducer;