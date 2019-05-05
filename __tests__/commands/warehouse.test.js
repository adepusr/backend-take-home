import assert from 'assert';
import { getWarehouse, getWarehouses, addWarehouse, getWarehouseProducts } from '../../commands/warehouse';

const store = require('../../store');
jest.mock('../../store', function(){
    return {
        PRODUCTS: [{ name: 'product1', sku: 'sku1' }, { name: 'product2', sku: 'sku2' }],
        WAREHOUSES: [
            { warehouseNumber: 1, limit: 200, filled: 100, products:[] },
            { warehouseNumber: 2, limit: 100, filled: 10, products:[{ sku: 'sku1', quantity: 10 }] }
        ]
    };
});

describe('Warehouse', () => {
    describe('GetWarehouses', () => {
        it('getWarehouses', () => {
            assert.equal(getWarehouses().length, 2);
        });
    });
    describe('GetWarehouse', () => {
        it('getWarehouse', () => {
            assert.equal(getWarehouse('1').length, 1);
        });
    });
    describe('AddWarehouse', () => {
        it('addWarehouse', () => {
            addWarehouse(3, 300);
            assert.equal(store.WAREHOUSES.length, 3);
        });
        it('addWarehouse throw WareHouse already exists in the List of Products', () => {
            assert.throws(() => addWarehouse(1, 300), Error, "WareHouse already exists in the List of Products");
        });
    });
    describe('GetWarehouseProducts', () => {
        it('getWarehouseProducts', () => {
            var products = getWarehouseProducts('2');
            assert.equal(products.length, 1);
            assert.equal(products[0].sku, 'sku1');
            assert.equal(products[0].quantity, 10);
        });
    });
});
