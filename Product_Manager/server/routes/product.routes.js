const ProductController = require("../controllers/product.controller");


module.exports = app => {
    app.get('/api/product', ProductController.findAllProducts);
    app.get('/api/product/:id', ProductController.findProductById);
    app.patch('/api/product/:id', ProductController.updateProduct);
    app.post('/api/product', ProductController.createProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}