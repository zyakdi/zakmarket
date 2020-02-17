const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product');
const path = require('path');

const app = express();

// Allow external servers to use this API when this server is on
// Implement CORS (Cross Origin Resource Sharing)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/api/product', productRoutes);



module.exports = app;