import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history';

import App from './components/App';
import Products from './components/Products';
import CreateProductForm from './components/CreateProductForm';
import UpdateProductForm from './components/UpdateProductForm';

// Router component can only have one child, hence the Switch component
ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/products' component={Products} />
            <Route path='/createProduct' component={CreateProductForm} />
            <Route path='/updateProduct' component={UpdateProductForm} />
        </Switch>
    </Router>,
    document.getElementById('root')
);

// FROM CREATE-REACT-APP :
// If I want my app to work offline and load faster, change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
