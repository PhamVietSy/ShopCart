export interface Product {
    id: string;
    title: string;
    price: number;
    image: string;
    description: string;
}
export interface Cart extends Product {
    quantity: number;
}
