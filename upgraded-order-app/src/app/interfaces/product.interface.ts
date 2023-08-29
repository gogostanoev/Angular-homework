import { Category } from "./category.enum";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: Category
    stock: number;
    quantity: number;
    totalPrice: number
}