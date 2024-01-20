import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart/cartSlice';
import productSlice from './features/products/productSlice';
import { apiSlice } from './api/apiSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (gDm) => gDm().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
