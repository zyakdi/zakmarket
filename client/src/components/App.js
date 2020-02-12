import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import NavigationBar from './NavigationBar';


function App() {
  return (
    <div className="App">
      <NavigationBar />
      <p>Welcome to the home page</p>
      <Button>Click!</Button>
      <Link to="/products">See our products</Link>
    </div>
  );
}

export default App;
