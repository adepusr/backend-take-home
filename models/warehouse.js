/** wareHouse.js POJO **/
const _ = require('lodash');

/*
    @optional limit
    @optional filled
    @optional products
*/
const WareHouse = function (warehouseNumber, limit, filled, products) {
    this.warehouseNumber = Number(warehouseNumber);
    this.limit = Number(limit) || Number.MAX_VALUE;
    this.filled = Number(filled) || 0;
    this.products = products || [];
}

/*
    @params filled of type integer defines total filled quantity for specific warehouse.
    @desc setter for filled attribute.
*/
WareHouse.prototype.updateFilled = function (filled) {
    this.filled = filled;
}
/*
    @params sku of type string unique id of a product
    @params quantity type integer - quantity willing to add
    @desc Added given sku of quantity to the list of products in that perticular warehouse
*/
WareHouse.prototype.addToWarehouse = function (sku, quantity) {
    var prod = this.products.filter(product => {
        return product.sku === sku;
    });
    if(prod.length > 0) {
        prod[0].quantity += quantity;
    } else {
        this.products.push({
            sku, quantity
        });
    }
}

/*
    @params sku of type string unique id of a product
    @params quantity type integer - quantity willing to add
    @desc Removes given quantity of product with sku from list of products in that perticular warehouse
*/
WareHouse.prototype.removeFromWarehouse = function (sku, quantity) {
    var prod = this.products.filter(product => {
        return product.sku === sku;
    });
    if(prod.length > 0) {
        if(prod[0].quantity <= quantity) {
            this.products.forEach((val, index) => {
                if(val.sku === sku){
                    this.products.splice(index, 1); 
                }
            });
        } else {
            this.products.forEach((val, index) => {
                if(val.sku === sku){
                    this.products[index].quantity = this.products[index].quantity - quantity;
                }
            });
        }
    }
}
// ES6 version
// class WareHouse {
//     constructor(warehouseNumber, limit = Number.MAX_VALUE, filled = 0, products = []) {
//         this.warehouseNumber = Number(warehouseNumber);
//         this.limit = Number(limit);
//         this.filled = Number(filled);
//         this.products = products;
//     }
//     updateFilled(filled) {
//         this.filled = filled;
//     }
//     addToWarehouse(sku, quantity) {
//         var prod = this.products.filter(product => {
//             return product.sku === sku;
//         });
//         if(prod.length > 0) {
//             prod[0].quantity += quantity;
//         } else {
//             this.products.push({
//                 sku, quantity
//             });
//         }
//     }
//     removeFromWarehouse(sku, quantity) {
//         var prod = this.products.filter(product => {
//             return product.sku === sku;
//         });
//         if(prod.length > 0) {
//             if(prod[0].quantity <= quantity) {
//                 this.products.forEach((val, index) => {
//                     if(val.sku === sku){
//                         this.products.splice(index, 1); 
//                     }
//                 });
//             } else {
//                 this.products.forEach((val, index) => {
//                     if(val.sku === sku){
//                         this.products[index].quantity = this.products[index].quantity - quantity;
//                     }
//                 });
//             }
//         }
//     }
// }

module.exports = WareHouse;
    