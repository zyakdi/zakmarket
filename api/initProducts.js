import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';


// Database configuration

var db = new JsonDB(new Config("products", true, true, '/'));

const defaultProducts = [
    { idProduct: 0, name: 'Macbook Pro 13"', price: 1.99, type: 'computer' },
    { idProduct: 1, name: 'Test nom', price: 22, type: 'test type' },
    { idProduct: 2, name: 'Autre test"', price: 332, type: 'feu' },
    { idProduct: 3, name: 'pokémon puissant', price: 9999999, type: 'dragon/eau/feu' }
];

var products = db.getData('/products');
const productsId = [];
products.forEach(product => {
    productsId.push(product.idProduct);
});

defaultProducts.forEach(product => {
    if (!productsId.includes(product.idProduct)) {
        db.push('/products[]', product);
    }
});


