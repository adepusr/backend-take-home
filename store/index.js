/*
Acts as Inmemory Store for this INVENTORY application 
*/

// Stores list of all add products
var PRODUCTS = [];

// Stores list of all added warehouses
var WAREHOUSES = [];

module.exports = {
    PRODUCTS,
    WAREHOUSES
};


// export const Store = function () {
//     let instance;
//     let products = [];
//     let warehouses = [];
//     const createInstance = () => {
//         return {
//             products,
//             warehouses 
//         };
//     }
//     return {
//         getInstance: () => {
//             if (!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     };
// }();
