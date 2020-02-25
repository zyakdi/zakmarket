// This component is a form displayed when the user wants to update the informations of a product

import React, { Component } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './UpdateProductForm.css';
import history from '../../history';


class UpdateProductForm extends Component {
    // idProduct, name, price, type and details
    state = {
        product: { ...this.props.location.state.product },
        canUpdate: true
    };

    updateName = ({ target: { value } }) => {
        this.setState({ product: { ...this.state.product, name: value } });
    }

    updateType = ({ target: { value } }) => {
        this.setState({ product: { ...this.state.product, type: value } });
    }

    updatePrice = ({ target: { value } }) => {
        this.setState({ product: { ...this.state.product, price: Number(value) } });
    }

    updateDetails = ({ target: { value } }) => {
        this.setState({ product: { ...this.state.product, details: value } });
    }

    // When the component is rendered (i.e the state has changed), check if the product can be updated
    // A product can be updated if all fields have been completed
    componentDidUpdate() {
        const { name, price, type, details } = this.state.product;

        if (name.length && price > 0 && type.length && details.length) {
            if(!this.state.canUpdate) {
                this.setState({ canUpdate: true });
            }
            return;
        }
        else {
            if(this.state.canUpdate) {
                this.setState({ canUpdate: false });
            }
        }
    }



    handleUpdate = () => {

        // fetch is used to interact with the API
        fetch('http://localhost:8080/api/product/' + this.state.product.idProduct, {
            method: 'PUT',
            body: JSON.stringify(this.state.product),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(json => {
                history.push('/products'); // Push the user to a Link
            });
    }

    render() {
        return (
            <div className="updateProductForm">
                <NavigationBar />
                <div className="formContainer">
                    <br />
                    <h2>Update product</h2>
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
                                    value={this.state.product.name}
                                    onChange={this.updateName}
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
                                    value={this.state.product.type}
                                    onChange={this.updateType}
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
                                    value={this.state.product.price}
                                    onChange={this.updatePrice}
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
                                    value={this.state.product.details}
                                    onChange={this.updateDetails}
                                />
                            </Col>
                        </Form.Group>
                        <br />
                        <div className="submitBtn">
                            <Button
                                disabled={!this.state.canUpdate}
                                variant="success"
                                onClick={this.handleUpdate}>
                                    Update
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default UpdateProductForm;