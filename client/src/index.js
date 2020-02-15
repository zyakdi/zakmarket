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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
