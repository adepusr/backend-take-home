import { contains } from  '../util';
import Product from '../models/product';
let { PRODUCTS } = require('../store');
/*
    @desc creates a Product object and addes to Store.PRODUCTS 
    @throws error when sku is already in the Store.PRODUCTS
*/
export const addProduct = (name, sku) => {
    if(!contains(PRODUCTS, 'sku', sku)){
        const product = new Product(name, sku);
        PRODUCTS.push(product);
    } else {
        throw new Error('SKU already exists in the List of Products');
    }
}

/*
    @desc returns all products from Store.PRODUCTS
*/
export const getProducts = () => {
    if(PRODUCTS.length > 0){
        return PRODUCTS;
    } else {
        throw new Error('NO Products to send');
    }
}

/*
    @desc returns products from Store.PRODUCTS matching the given sku
*/
export const getProduct = (sku) => {
    return PRODUCTS.filter(product => {
        return product.sku == sku;
    });
}
