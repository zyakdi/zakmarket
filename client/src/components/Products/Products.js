import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import Product from '../Product';
import { Button } from 'react-bootstrap';
import './Products.css';
import history from '../../history';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/product`)
            .then(response => response.json())
            .then(json => setProducts(json))
            .catch(error => {
                console.error(error);
            });
    });

    const handleDelete = idProductToDel => {
        // Delete from the json database using the API
        fetch('http://localhost:8080/api/product/' + idProductToDel, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(json => {
                console.log(json.message || json.type);
            })
            .catch(error => {
                console.error(error);
            });

        // Delete from the state
        for (var i = 0; i < products.length; i++) {
            if (products[i].idProduct === idProductToDel) {
                setProducts(products.splice(i, 1));
            }
        }
    }


    return (
        <div className="products">
            <NavigationBar />
            <br />
            <div className="createProductDiv">
                <BrowserRouter>
                    <Link to='/createProduct' onClick={() => history.push('/createProduct')}>
                        <Button className="createProductBtn">Create a new product</Button>
                    </Link>
                </BrowserRouter>
            </div>
            <br />
            <h2>Our products</h2>
            <br />
            <div className="productsContainer">
                {
                    products.map((product) => {
                        return (
                            <div className="flexItem" key={product.idProduct}>
                                <Product
                                    product={product}
                                    handleDelete={handleDelete}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Products;

