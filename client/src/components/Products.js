import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Product from './Product';
import { Button } from 'react-bootstrap';
import './Products.css';


class Products extends Component {
    state = { products: [] };

    componentDidMount() {
        fetch(`http://localhost:8080/api/product`)
            .then(response => response.json())
            .then(json => this.setState({ products: json }));
    }

    handleDelete = idProductToDel => {
        // Delete from the json database using the API
        fetch('http://localhost:8080/api/product/' + idProductToDel, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(json => {
                console.log(json.message || json.type);
            });

        // Delete from the state
        var { products } = this.state;
        for (var i = 0; i < products.length; i++) {
            if (products[i].idProduct === idProductToDel) {
                products.splice(i, 1);
                this.setState({ products });
            }
        }
    }


    render() {
        return (
            <div className="products">
                <NavigationBar />
                <br />
                <Link to='/createProduct'>
                    <div className="createProductDiv">
                        <Button className="createProductBtn">Create a new product</Button>
                    </div>
                </Link>
                <br />
                <h2>Our products</h2>
                <br />
                <div className="productsContainer">
                    {
                        this.state.products.map((product) => {
                            return (
                                <div className="flexItem">
                                    <Product
                                        key={product.idProduct}
                                        product={product}
                                        handleDelete={this.handleDelete}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Products;