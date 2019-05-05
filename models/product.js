/** product.js POJO **/

const Product = function (name, sku) {
    this.name = name;
    this.sku = sku;
}
export default Product;
// NOTE we can also have getters and setters and access along with them
// ES6 Style
// export class Product {
//     constructor(name, sku) {
//         this.name = name;
//         this.sku = sku;
//     }
// }