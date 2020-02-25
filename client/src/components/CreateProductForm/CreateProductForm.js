// Form component displayed when the user wants to create a product


import React, { useState, useEffect } from 'react';
import NavigationBar from '../NavigationBar';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './CreateProductForm.css';
import history from '../../history';

const CreateProductForm = () => {
    const [product, setProduct] = useState({ name: '', price: 0, type: '', details: '' });
    const [canUpdate, setCanUpdate] = useState(true);

    const updateName = event => {
        setProduct({ ...product, name: event.target.value });
    }

    const updateType = event => {
        setProduct({ ...product, type: event.target.value });
    }

    const updatePrice = event => {
        setProduct({ ...product, price: event.target.value });
    }

    const updateDetails = event => {
        setProduct({ ...product, details: event.target.value });
    }

    // This hook replaces componentDidMount, componentDidUpdate and componentWillUnmount at the same time
    // Check if all field are filled to enable or disable the Update button
    useEffect(() => {
        const { name, price, type, details } = product;

        if (name.length && price > 0 && type.length && details.length) {
            if (!canUpdate) {
                setCanUpdate(true);
            }
            return;
        }
        else {
            if (canUpdate) {
                setCanUpdate(false);
            }
        }
    }, [product, canUpdate]);

    const handleCreate = () => {
        // fetch is used to interact with the API
        fetch('http://localhost:8080/api/product/', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(json => {
                history.push('/products'); // Push the user to a Link
            });
    }


    return (
        <div className="createProductForm">
            <NavigationBar />
            <div className="formContainer">
                <br />
                <h2>Create product</h2>
                <br />
                <Form>
                    <Form.Group as={Row} className="gr">
                        <Form.Label column sm={1} className="lbl">
                            Name
                        </Form.Label>
                        <Col sm={5} className="col">
                            <Form.Control
                                type="text"
                                placeholder="Macbook Pro 2019, Skateboard 8 inches..."
                                value={product.name}
                                onChange={updateName}
                            />
                        </Col>
                    </Form.Group>
                    <br />
                    <Form.Group as={Row} className="gr">
                        <Form.Label column sm={1} className="lbl">
                            Type
                        </Form.Label>
                        <Col sm={5} className="col">
                            <Form.Control
                                type="text"
                                placeholder="Laptop, smartphone, book..."
                                value={product.type}
                                onChange={updateType}
                            />
                        </Col>
                    </Form.Group>
                    <br />
                    <Form.Group as={Row} className="gr">
                        <Form.Label column sm={1} className="lbl">
                            Price ($)
                        </Form.Label>
                        <Col sm={5} className="col">
                            <Form.Control
                                type="text"
                                placeholder="249.99"
                                value={product.price}
                                onChange={updatePrice}
                            />
                        </Col>
                    </Form.Group>
                    <br />
                    <Form.Group as={Row} className="gr">
                        <Form.Label column sm={1} className="lbl">
                            Details
                        </Form.Label>
                        <Col sm={5} className="col">
                            <Form.Control
                                type="text"
                                as="textarea"
                                placeholder="Scratched on the bottom, shipped within 48 hours, includes charger and adapter..."
                                value={product.details}
                                onChange={updateDetails}
                            />
                        </Col>
                    </Form.Group>
                    <br />
                    <div className="submitBtn">
                        <Button
                            disabled={!canUpdate}
                            variant="success"
                            onClick={handleCreate}>
                            Create product
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
};


export default CreateProductForm;