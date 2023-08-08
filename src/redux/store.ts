import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./features/product.api";


export const store = configureStore({
    reducer: {
        
        [productApi.reducerPath]: productApi.reducer,
        
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat([
            productApi.middleware,
        ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
