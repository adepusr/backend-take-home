const { getProduct } = require('./product');
const { getWarehouse } = require('./warehouse');

/*
    @desc adds given quantity of sku to given warehouse and updates the filled value along with that.
    @throws error if sku | warehouse is not found 
*/
const stock = (sku, warehouseNumber, quantity) => {
    var warehouse = getWarehouse(warehouseNumber);
    if (warehouse.length > 0) {
        if (getProduct(sku).length > 0) {
            if(warehouse[0].filled + quantity > warehouse[0].limit) {
                warehouse[0].addToWarehouse(sku, warehouse[0].limit - warehouse[0].filled);
                warehouse[0].updateFilled(warehouse[0].limit);
            } else if(warehouse[0].filled + quantity <= warehouse[0].limit) {
                warehouse[0].updateFilled(warehouse[0].filled + quantity);
                warehouse[0].addToWarehouse(sku, quantity);
            }
        } else {
            throw new Error('Please check PRODUCT sku');
        }
    } else {
        throw new Error('Please check WAREHOUSE number');
    }
}
/*
    @desc removes given quantity of sku from given warehouse and updates the filled value along with that.
    @throws error if sku | warehouse is not found 
*/
const unstock = (sku, warehouseNumber, quantity) => {
    var warehouse = getWarehouse(warehouseNumber);
    if (warehouse.length > 0) {
        if (getProduct(sku).length > 0) {
            const product = warehouse[0].products.filter(val => val.sku === sku);
            if(product.length > 0){
                const productQuantity = product[0].quantity
                if(productQuantity >= quantity) {
                    if((warehouse[0].filled - quantity >= 0)) {
                        warehouse[0].removeFromWarehouse(sku, quantity);
                        warehouse[0].updateFilled(warehouse[0].filled - quantity);
                    }
                } else {
                //    console.log("Filled:"+warehouse[0].filled +" productQuantity:"+productQuantity +" quantity:"+ quantity )
                    warehouse[0].removeFromWarehouse(sku, quantity);
                    warehouse[0].updateFilled(warehouse[0].filled - productQuantity);
                }
            } else {
                throw new Error('Please check PRODUCT sku');
            }
        } else {
            throw new Error('Please check PRODUCT sku');
        }
    } else {
        throw new Error('Please check WAREHOUSE number');
    }
}

module.exports = {
    stock,
    unstock
};