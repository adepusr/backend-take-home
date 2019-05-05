import assert from 'assert';
import { stock, unstock } from '../../commands/inventory';

const store = require('../../store')

jest.resetModules();
jest.mock('../../store', function(){
    return {
        PRODUCTS: [{ name: 'product1', sku: 'sku1' }, { name: 'product2', sku: 'sku2' }],
        WAREHOUSES: [
            { warehouseNumber: 1, limit: 100, filled: 10, products: [{ sku: 'sku1', quantity: 10 }] }
        ]
    };
});
describe('Inventory', () => {
    describe('Stock', () => {
        // it('stock', () => {
        //     stock('sku1', 1, 50);
        //     const warehouses = store.WAREHOUSES;
        //     assert.equal(warehouses.length, 1);
        //     assert.equal(warehouses[0].limit, 100);
        //     assert.equal(warehouses[0].filled, 60);
        //     assert.equal(warehouses[0].products.length, 1);
        //     assert.equal(warehouses[0].products[0].filled, 50);
        //     assert.equal(warehouses[0].products[0].sku, 'sku1');
        // });
        it('stocking sku with no product throw Please check PRODUCT sku', () => {
            assert.throws(() => stock('sku-not-present', 1, 50), Error, 'Please check PRODUCT sku');
        });
        it('stocking product to not present warehouse throw Please check WAREHOUSE number', () => {
            assert.throws(() => stock('sku1', 999, 50), Error, 'Please check WAREHOUSE number');
        });
    });

    describe('UnStock', () => {
        // it('unstock', () => {
        //     unstock('sku1', 1, 50);
        //     const warehouses = store.WAREHOUSES;
        //     assert.equal(warehouses.length, 1);
        //     assert.equal(warehouses[0].limit, 100);
        //     assert.equal(warehouses[0].filled, 60);
        //     assert.equal(warehouses[0].products.length, 1);
        //     assert.equal(warehouses[0].products[0].filled, 50);
        //     assert.equal(warehouses[0].products[0].sku, 'sku1');
        // });
        it('unstocking sku with no product throw Please check PRODUCT sku', () => {
            assert.throws(() => unstock('sku-not-present', 1, 50), Error, 'Please check PRODUCT sku');
        });
        it('unstocking product to not present warehouse throw Please check WAREHOUSE number', () => {
            assert.throws(() => unstock('sku1', 999, 50), Error, 'Please check WAREHOUSE number');
        });
    });
});
