import { Product } from "../products/product.model";

export interface Category {
    id: string;
    name: string;
    products: Product[];
}