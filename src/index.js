import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Employee from './Employee';

ReactDOM.render(
    <HashRouter basename="/" >
        <div>
            <Route exact path='/' component={App} />
            <Route exact path='/employee/:id' component={Employee} />
        </div>
    </HashRouter>
    , document.getElementById('root')
);
registerServiceWorker();
