import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { CardDeck, CardColumns, CardGroup, Form, Row, Col, Button } from 'react-bootstrap';
import './UpdateProductForm.css';
import history from '../history';


class CreateProductForm extends Component {
    state = {
        product: { name: '', price: 0, type: '', details: '' },
        canCreate: false
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

    // When the component is rendered (i.e the state has changed), check if the product can be created
    // A product can be created if all fields have been completed
    componentDidUpdate() {
        const { name, price, type, details } = this.state.product;
        console.log('wesh', name, price, type, details);

        if (name.length && price > 0 && type.length && details.length) {
            console.log('excellent');
            if(!this.state.canCreate) {
                this.setState({ canCreate: true });
            }
            return;
        }
        else {
            if(this.state.canCreate) {
                this.setState({ canCreate: false });
            }
        }
    }

    handleCreate = () => {
        // fetch is used to interact with the API
        fetch('http://localhost:3000/api/product/', {
            method: 'POST',
            body: JSON.stringify(this.state.product),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(json => {
                alert(json.message || json.type);
                history.push('/products'); // Push the user to a Link
            });
    }



    render() {
        const product = this.state.product;

        return (
            <div className="createProductForm">
                <NavigationBar />
                <div className="formContainer">
                    <br />
                    <br />
                    <br />
                    <h2>Create a new product</h2>
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
                                    onChange={this.updateName}
                                    value={product.name}
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
                                    value={product.price}
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
                                    value={product.details}
                                    onChange={this.updateDetails}
                                />
                            </Col>
                        </Form.Group>
                        <br />
                        <div className="submitBtn">
                            <Button
                                disabled={!this.state.canCreate}
                                variant="success"
                                onClick={this.handleCreate}>
                                Create product
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default CreateProductForm;