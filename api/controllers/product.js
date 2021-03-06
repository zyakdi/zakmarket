import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';

var db = new JsonDB(new Config("products", true, true, '/'));


// POST : create a product
// Post the body of the request to the product database
// The body is defined by the frontend
exports.createProduct = (req, res, next) => {

    try {
        var products = db.getData('/products');
    } catch (error) {
        console.error(error);
    }

    // The next product id is the max existing value + 1
    var idNewProduct = products.length ? products[0].idProduct + 1 : 0;
    products.forEach(product => {
        idNewProduct = product.idProduct >= idNewProduct ? product.idProduct + 1 : idNewProduct;
    });

    const newProduct = { ...req.body, idProduct: idNewProduct };

    db.push('/products[]', newProduct);

    res.status(201).json({ type: 'success', newProduct });
};


// GET one product of the json database
exports.getOneProduct = (req, res, next) => {

    try {
        var products = db.getData('/products');
    } catch (error) {
        console.error(error);
    }

    for (const product of products) {
        if (product.idProduct == req.params.id) {
            return res.status(200).json(product);
        }
    }

    // End of the loop : the product was not found
    res.status(404).json({ type: 'error', message: 'Can\'t find the requested product' });
};


// PUT request to update a product of the database
// Possible to add new information about the product if the UI allows it
exports.updateProduct = (req, res, next) => {

    try {
        var products = db.getData('/products');
    } catch (error) {
        console.error(error);
    }

    // Loop over the products of the database
    for (var i = 0; i < products.length; i++) {
        if (products[i].idProduct == req.params.id) {

            // Update the data of the product by looping over every prop of the req.body
            for (const prop in req.body) {
                if (prop != 'idProduct') {
                    // Change prop value
                    db.push(`/products[${i}]/${prop}`, req.body[prop]);
                }
            }

            // Get the updated product
            try {
                var updatedProduct = db.getData(`/products[${i}]`);
            } catch (error) {
                console.error(error);
            }

            return res.status(200).json({ type: 'success', updatedProduct });
        }
    }

    // End of the loop : the product was not found
    res.status(404).json({ type: 'error', message: 'Can\'t find the requested product' });
};


// DELETE product
exports.deleteProduct = (req, res, next) => {

    try {
        var products = db.getData('/products');
    } catch (error) {
        console.error(error);
    }

    // Loop over the products of the database
    for (var i = 0; i < products.length; i++) {
        if (products[i].idProduct == req.params.id) {
            db.delete(`/products[${i}]`);
            return res.status(200).json({ type: 'success' });
        }
    }

    // End of the loop : the product was not found
    res.status(404).json({ type: 'error', message: 'Can\'t find the requested product' });
};


// GET all products of the json database
exports.getAllProducts = (req, res, next) => {
    try {
        try {
            var products = db.getData("/products");
        } catch (error) {
            // The error will tell where the data path stopped
            console.error(error);
        }
        res.status(200).json(products);
    } catch (error) {
        res.status(400).json({ error });
    }
};