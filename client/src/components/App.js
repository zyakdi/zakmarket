import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import NavigationBar from './NavigationBar';


function App() {
  return (
    <div>
      <NavigationBar />
      <div className="home">
        <br />
        <br />
        <h1>Zak-Market</h1>
        <h2>A marketplace for everyone</h2>
        <br />
        <br />
        <p>Our mission? provide a friendly place to buy and sell products between individuals.</p>
        <p>Want to sell your product ? <Link to="/createProduct">Start by creating a product here.</Link></p>
        <div className="viewProductsBtn">
          <Link to="/products">
            <Button>
              View and manage products
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
