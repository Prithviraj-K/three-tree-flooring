import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createBrowserHistory } from "history";

import * as serviceWorker from './serviceWorker';
import { Router, Route, Switch } from "react-router-dom";

var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>,
    document.getElementById('root'));

serviceWorker.unregister();
