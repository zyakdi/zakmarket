import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Product from './Product';

// NOT DONE YET !!!

class Products extends Component {
    state = { products: [] };

    componentDidMount() {
        fetch(`${document.location.origin}/api/product`)
            .then(response => response.json())
            .then(json => this.setState({ products: json }));
    }


    render() {
        console.log('products: ', this.state.products);
        return (
            <div className="products">
                <NavigationBar />
                <p>These are our products</p>
                {
                    this.state.products.map((product) => (
                        <Product product={product} />
                    ))
                }
            </div>
        );
    }
}

export default Products;