const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get("/api/products",ProductController.index);
    app.post("/api/create/product",ProductController.create);
    app.get("/api/product/:id",ProductController.show);
    app.put("/api/update/product/:id",ProductController.update);
    app.delete("/api/destroy/product/:id",ProductController.destroy);

}