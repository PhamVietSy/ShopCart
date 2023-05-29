import { createReducer, createAction } from '@reduxjs/toolkit';
import { product } from '../data/product';
import { Product } from './type/Product.type';

export const initalProductList: Product[] = product;
interface ProductState {
    productList: Product[];
}
const initalState: ProductState = {
    productList: initalProductList,
};
export const products = createAction<Product>('products');
export const productDetail = createAction<Product>('productDetail');

const productReducer = createReducer(initalState, (builder) => {
    builder.addCase(products, (state, action) => {}).addCase(productDetail, (state, action) => {});
});

export default productReducer;
