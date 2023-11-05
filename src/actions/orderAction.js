import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../utilities/axios';
import { delayedTimeout } from "../utilities/delayedTimeout";
import { httpParams } from "../utilities/httpParams";


export const saveOrder = createAsyncThunk(
    "order/saveOrder",
    async(params, {rejectWithValue}) => {

        try {

            const requestConfig = {
                headers : {
                    "Content-Type": "application/json"
                }
            };

            const {data} = await axios.post(
                `/api/v1/order`,
                params,
                requestConfig
            );

            localStorage.setItem('stripeapi', data.stripeApiKey);
            await delayedTimeout(1000);

            return data;

        }catch(err){
            return rejectWithValue(err.response.data.message);
        }

    }
)

export const confirmPayment = createAsyncThunk(
    "order/payment",
    async(params, {rejectWithValue}) => {

        try {

            const requestConfig = {
                headers : {
                    "Content-Type": "application/json"
                }
            }

            const {data} = await axios.post(
                `/api/v1/payment`,
                params,
                requestConfig
            );

            return data;

        }catch(err){
            return rejectWithValue(err.response.data.message);

        }


    }
)
export const getOrder = createAsyncThunk(
    "products/getProducts",
    async (ThunkApi, {rejectWithValue}) => {
        
        try{
            await delayedTimeout(1000);
            return await axios.get(`/api/v1/order/paginationAdmin`);
        }catch(err){
            return rejectWithValue(`Errores: ${err.message}`);
        }

    }
)

export const getOrderById = createAsyncThunk(
    "orders/getOrderById",
    async (id, { rejectWithValue }) => {
        try {
            await delayedTimeout(1000);
            const result = await axios.get(`/api/v1/order/${id}`);
            return result.data;
        } catch (err) {
            return rejectWithValue(`Errores: ${err.message}`);
        }
    }
);
export const getProductPagination = createAsyncThunk(
    "products/getProductPagination",
    async(params, { rejectWithValue }) => {

        try{
            await delayedTimeout(1000); 
            params = httpParams(params);
            const paramUrl = new URLSearchParams(params).toString();

            var results = axios.get(`api/v1/product/pagination?${paramUrl}`);

            return (await results).data;

        }catch(err)
        {
            return rejectWithValue(`Errores: ${err.message}`);
        }
    }
);