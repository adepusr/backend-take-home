import { contains } from '../util';
import WareHouse from '../models/warehouse';
import { getProduct } from './product';

let { WAREHOUSES } = require('../store');
/*
    @desc creates a Warehouse object and addes to Store.WAREHOUSES 
    @throws error when warehouseNumber is already in the Store.WAREHOUSES
*/
export const addWarehouse = (warehouseNumber, limit) => {
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
export const getWarehouses = () => {
    if(WAREHOUSES.length > 0){
        return WAREHOUSES;
    } else {
        throw new Error("NO Warehous to send");
    }
}

/*
    @desc returns warehouse from Store.WAREHOUSES matching the given warehouse number
*/
export const getWarehouse = (warehouseNumber) => {
    return WAREHOUSES.filter(wareHouse => {
        return wareHouse.warehouseNumber === Number(warehouseNumber);
    });
}

/*
    @desc returns full details about products in a given warehouse.
*/
export const getWarehouseProducts = (warehouseNumber) => {
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
