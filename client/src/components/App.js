import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import NavigationBar from './NavigationBar';
import { Card } from 'react-bootstrap';
import logo from '../tree-logo.png';


function App() {
  return (
    <div>
      <NavigationBar />
      <div className="home">
        <br />
        <br />
        <img className="logo" src={logo} alt="Tree logo" height="200" width="200" />
        <h1>Zak-Market</h1>
        <h2>A marketplace for the planet</h2>
        <br />
        <br />
        <Card border="dark" className='homeCard'>
          <Card.Header className="cardHeader"><span className="">Our mission</span></Card.Header>
          <Card.Body>
            <Card.Text className='cardText'>
              Provide a friendly place to buy and sell products between individuals.
              We believe second hand products are a solution to reduce our
              ecological impact by preventing overproduction of packaging.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <br />
        <Card border="dark" className='homeCard'>
          <Card.Header className="cardHeader">Want to sell your product ?</Card.Header>
          <Card.Body>
            <Card.Text>
              <Link to="/createProduct">Start by creating a product here.</Link>
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <br />
        <div className="viewProductsBtn">
          <Link to="/products">
            <Button className='homeBtn'>
              See our products
          </Button>
          </Link>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
