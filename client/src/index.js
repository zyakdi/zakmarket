import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import Products from './components/Products';

ReactDOM.render(
    // history of the props = the imported history from history.js
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/products' component={Products} />
        </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
