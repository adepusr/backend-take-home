var assert = require('assert');
const Product = require('../../models/product');
const store = require('../../store');


const { addProduct, getProducts, getProduct } = require('../../commands/product');

const name = 'product 1';
const sku = '123-123';
const product1 = new Product(name, sku);


jest.mock('../../store', function(){
    return {
        PRODUCTS: [{ name: 'product1', sku: 'sku1' }, { name: 'product2', sku: 'sku2' }],
        WAREHOUSES: []
    };
});

describe('Product', () => {
    describe('GetProducts', () => {
        // it('getProducts throw NO Products to send', () => {
            // assert.throws(getProducts, Error, "NO Products to send");
        // });
        it('getProducts', () => {
            assert.equal(getProducts().length, 2);
        });
    });
    describe('GetProduct', () => {
        it('getProduct', () => {
            assert.equal(getProduct('sku1').length, 1);
        });
    });
    describe('AddProduct', () => {
        it('addProduct', () => {
            addProduct('sku1-to-add', 'add-1')
            assert.equal(store.PRODUCTS.length, 3);
        });
    });
});
