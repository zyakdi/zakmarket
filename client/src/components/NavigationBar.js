// Navigation bar of the website

import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavigationBar.css';


class NavigationBar extends Component {
    state = {};

    render() {
        return (
            <div className="navigationBar">
                <Navbar expand="lg" variant="dark">
                    <Navbar.Brand href="/">Zak-Market</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/products">Products</Nav.Link>
                            <Nav.Link href="/createProduct">Create a product</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavigationBar;