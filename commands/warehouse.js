const { contains } = require('../util');
const WareHouse = require("../models/warehouse")
let { WAREHOUSES } = require('../store');
const { getProduct } = require('./product');

/*
    @desc creates a Warehouse object and addes to Store.WAREHOUSES 
    @throws error when warehouseNumber is already in the Store.WAREHOUSES
*/
const addWarehouse = (warehouseNumber, limit) => {
    if(!contains(WAREHOUSES, 'warehouseNumber', warehouseNumber)){
        const w1 = new WareHouse(warehouseNumber, limit);
        WAREHOUSES.push(w1);
    } else {
        throw new Error("WareHouse already exists in the List of Products");
    }
}

/*
    @desc returns Store.WAREHOUSES 
    @throws error when Store.WAREHOUSES is empty
*/
const getWarehouses = () => {
    if(WAREHOUSES.length > 0){
        return WAREHOUSES;
    } else {
        throw new Error("NO Warehous to send");
    }
}

/*
    @desc returns warehouse from Store.WAREHOUSES matching the given warehouse number
*/
const getWarehouse = (warehouseNumber) => {
    return WAREHOUSES.filter(wareHouse => {
        return wareHouse.warehouseNumber === Number(warehouseNumber);
    });
}

/*
    @desc returns full details about products in a given warehouse.
*/
const getWarehouseProducts = (warehouseNumber) => {
    const productList = WAREHOUSES.filter(wareHouse => {
        return wareHouse.warehouseNumber === Number(warehouseNumber);
    })[0].products;
    return productList.map(value => {
        var name = getProduct(value.sku)[0].name;
        return {
            sku: value.sku,
            quantity: value.quantity,
            name,
        }
    });
}

module.exports = {
    addWarehouse,
    getWarehouses,
    getWarehouse,
    getWarehouseProducts
};