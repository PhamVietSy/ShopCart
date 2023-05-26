import { configureStore } from '@reduxjs/toolkit';
import productReducer from './redux/ProductsCart.reducer';
import cartReducer from './redux/Cart.reducer';

export const store = configureStore({
    reducer: { products: productReducer, carts: cartReducer },
});

//Lấy RootState và AppDispath từ store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
