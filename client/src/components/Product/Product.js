// The product component is represented by 1 product displayed in the Products component

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link, BrowserRouter } from 'react-router-dom';
import './Product.css';
import history from '../../history';


const Product = props => {

    const toFirstLetterUpperCase = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const productDetails = () => {
        const productKeys = Object.keys(props.product);
        const ignoreKeys = ['idProduct', 'owner', 'price', 'name', 'type'];

        return (
            <span className="productDetails">
                {
                    productKeys.map((key, index) => {
                        if (ignoreKeys.includes(key)) return (null);

                        return (
                            <span key={index}>
                                {toFirstLetterUpperCase(key) + ': ' + props.product[key]}
                                <br />
                            </span>
                        )
                    })
                }
            </span>
        );
    }

    return (
        <Card>
            <Card.Header className='productDesign'>{props.product.type.toUpperCase()}</Card.Header>
            <Card.Body className="cardBody">
                <Card.Title>{toFirstLetterUpperCase(props.product.name)}</Card.Title>
                <Card.Subtitle>{props.product.price + " $"}</Card.Subtitle>
                <Card.Text>
                    {productDetails()}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='productDesign'>
                <div className="cardFooter">
                    <div className="footerBtn">
                        <BrowserRouter>
                            <Link
                                to={{ pathname: '/updateProduct', state: { product: props.product} }}
                                onClick={() => history.push('/updateProduct')}>
                                <Button variant="secondary">Update</Button>
                            </Link>
                        </BrowserRouter>
                    </div>
                    <div className="footerBtn">
                        <Button onClick={() => props.handleDelete(props.product.idProduct)} variant="danger">Delete</Button>
                    </div>
                </div>
            </Card.Footer>
        </Card>
    )
}


export default Product;