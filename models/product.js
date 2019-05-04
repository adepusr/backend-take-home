/** product.js POJO **/

const Product = function (name, sku) {
    this.name = name;
    this.sku = sku;
}

// NOTE we can also have getters and setters and access along with them
module.exports = Product;
    
// ES6 Style
// class Product {
//     constructor(name, sku) {
//         this.name = name;
//         this.sku = sku;
//     }
// }
// module.exports = Product;