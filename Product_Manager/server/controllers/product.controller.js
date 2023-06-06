const Product = require('../models/product.model');






//? ALl product CRUD methods
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then(product => res.json(product))
    .catch(err => console.log(err))
}


module.exports.findAllProducts = (req, res) => {
    Product.find()
    .then((allProducts) => {
        console.log(allProducts);
        res.json({products: allProducts})
    })
    .catch((err) => {
        res.json({message: "-----Something went wrong-----", error: err})
    })
}

module.exports.findProductById = (req, res) => {
    Product.findOne({_id: req.params.id})
    .then(oneProduct => {
        res.json({product: oneProduct})
    })
    .catch((err) => {
        res.json({message: "-----Something went wrong-----", error: err})
    })
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(updatedProduct => {
        res.json({product: updatedProduct})
    })
    .catch((err) => {
        res.json({message: "-----Something went worng-----", error: err})
    })
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
    .then(result => {
        res.json({result: result})
    })
    .catch((err) => {
        res.json({message: "-----Something went worng-----", error: err})
    })
}

