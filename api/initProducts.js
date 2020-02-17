// Initialize the database with a few products.
// To populate the database, go to api/ folder and type : npm initdb

import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';


var db = new JsonDB(new Config("products", true, true, '/'));

const defaultProducts = [
    { 
        idProduct: 0, 
        name: 'Macbook Pro 13 inches', 
        price: 1100, type: 'computer', 
        details: 'Manufactured in 2019, Qwerty keyboard, touchbar' },
    {
        idProduct: 1, name: "Benjamin Franklin by Walter Isaacson",
        price: 15.5,
        type: "book",
        details: "Paperback, 586 pages, very nice book"
    },
    {
        idProduct: 2,
        name: "Skateboard 8 inches",
        price: 80,
        type: "Skateboard",
        details: "Damaged grip tape, spitfire wheels and Venture trucks"
    },
    {
        idProduct: 3,
        name: "Xiaomi Mi5",
        price: 79.99,
        type: "Smartphone",
        details: "64Go storage, manufactured in 2017"
    },
    {
        name: "Gucci sweatshirt",
        price: 340,
        type: "clothing",
        details: "Size S, worn a few times",
        idProduct: 4
    },
    {
        name: "usb stick",
        price: 12,
        type: "hardware",
        details: "128Go storage, formatted in FAT32",
        idProduct: 5
    },
    {
        name: "Harmonica",
        price: 14.4,
        type: "instrument",
        details: "Hohner marine band in key of C",
        idProduct: 6
    },
    {
        idProduct: 7,
        name: "Fender bass",
        price: 480,
        type: "instrument",
        details: "Blue Fender bass, 4 strings, shipped with jack connector"
    }
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


