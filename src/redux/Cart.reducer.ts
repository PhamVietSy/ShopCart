import { createReducer, createAction } from '@reduxjs/toolkit';
import { message } from 'antd';

import { Cart } from './type/Product.type';

interface CartState {
    cartAr: Cart[];
    cartQuantity: number;
    cartTotalAmout: number;
}
const initalState: CartState = {
    // @ts-ignore
    cartAr: localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : [],
    cartQuantity: 0,
    cartTotalAmout: 0,
};
export const addCart = createAction<Cart>('addCart');
export const deleteCart = createAction<Cart>('delete');
export const editQuantityCart = createAction<Cart>('editQuantityCart');
export const deleteAllCart = createAction('deleteAllCart');
export const getTotal = createAction('getTotal');

const cartReducer = createReducer(initalState, (builder) => {
    builder
        .addCase(addCart, (state, action) => {
            const itemIndex = state.cartAr.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartAr[itemIndex].quantity += 1;
                message.success(`Increased ${state.cartAr[itemIndex].quantity} product quantity`);
            } else {
                const item = [...state.cartAr, action.payload];
                state.cartAr = item;
                message.success(`${action.payload.title} added to cart`);
            }

            localStorage.setItem('cartItem', JSON.stringify(state.cartAr));
        })
        .addCase(deleteCart, (state, action) => {
            const nextCartItems = state.cartAr.filter((cartItem) => cartItem.id !== action.payload.id);
            state.cartAr = nextCartItems;
            localStorage.setItem('cartItem', JSON.stringify(state.cartAr));
            message.success(`You delete product`);
        })
        .addCase(editQuantityCart, (state, action) => {
            const itemIndex = state.cartAr.findIndex((cartItem) => cartItem.id === action.payload.id);
            if (state.cartAr[itemIndex].quantity > 1) {
                state.cartAr[itemIndex].quantity -= 1;
                message.info('Change quantity');
            } else if (state.cartAr[itemIndex].quantity === 1) {
                const nextCartItems = state.cartAr.filter((cartItem) => cartItem.id !== action.payload.id);
                state.cartAr = nextCartItems;
                message.info(`Change quantity`);
            }
            localStorage.setItem('cartItem', JSON.stringify(state.cartAr));
        })
        .addCase(deleteAllCart, (state) => {
            state.cartAr = [];
            localStorage.setItem('cartItem', JSON.stringify(state.cartAr));
        })
        .addCase(getTotal, (state) => {
            // const obj = {
            //     total: 0,
            //     quantity: 0,
            // };
            // state.cartAr.forEach((item) => {
            //     obj.total += item.quantity * item.price;
            //     obj.quantity += item.quantity;
            // });
            let { total, quantity } = state.cartAr.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.total += itemTotal;
                    cartTotal.quantity += quantity;
                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                },
            );
            state.cartQuantity = quantity;
            state.cartTotalAmout = total;
        });
});

export default cartReducer;
