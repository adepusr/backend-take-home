import assert from 'assert';
const store = require('../../store');

describe('Store Default Values', () => {
    ['PRODUCTS', 'WAREHOUSES'].map(type => {
        it(type+' should should be empty', () => {
            assert.equal(store[type].length, 0);
        });
    })
});