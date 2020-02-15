import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';



class Product extends Component {

    toFirstLetterUpperCase = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    get productDetails() {

        const { product } = this.props;
        const productKeys = Object.keys(product);
        const ignoreKeys = ['idProduct', 'owner', 'price', 'name', 'type'];

        return (
            <span className="productDetails">
                {
                    productKeys.map((key, index) => {
                        if (ignoreKeys.includes(key)) return (null);

                        return (
                            <span key={index}>
                                {this.toFirstLetterUpperCase(key) + ': ' + product[key]}
                                <br/>
                            </span>
                        )
                    })
                }
            </span>
        );
    }

    render() {
        const { product } = this.props;
        return (
            <Card>
                <Card.Header>{this.toFirstLetterUpperCase(product.type)}</Card.Header>
                <Card.Body>
                    <Card.Title>{this.toFirstLetterUpperCase(product.name)}</Card.Title>
                    <Card.Subtitle>{product.price}</Card.Subtitle>
                    <Card.Text>
                        {this.productDetails}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <div className="cardFooter">
                        <div className="footerBtn">
                            <Link to={{ pathname: '/updateProduct', state: { product } }}>
                                <Button variant="secondary">Update</Button>
                            </Link>{' '}
                        </div>
                        <div className="footerBtn">
                            <Button onClick={() => this.props.handleDelete(product.idProduct)} variant="danger">Delete</Button>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
        )
    }
}


export default Product;