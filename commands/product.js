let { PRODUCTS } = require('../store');
const { contains } = require('../util');
const Product = require("../models/product")

/*
    @desc creates a Product object and addes to Store.PRODUCTS 
    @throws error when sku is already in the Store.PRODUCTS
*/
const addProduct = (name, sku) => {
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
const getProducts = () => {
    if(PRODUCTS.length > 0){
        return PRODUCTS;
    } else {
        throw new Error('NO Products to send');
    }
}

/*
    @desc returns products from Store.PRODUCTS matching the given sku
*/
const getProduct = (sku) => {
    return PRODUCTS.filter(product => {
        return product.sku == sku;
    });
}

module.exports = {
    addProduct,
    getProducts,
    getProduct
};