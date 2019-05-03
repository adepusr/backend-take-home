/** product.js POJO **/

const Product = function (name, sku) {
    this.name = name;
    this.sku = sku;
}

// NOTE we can also have getters and setters and access along with them
module.exports = Product;
    