import React from 'react';
import ReactDOM from 'react-dom/client'; // Update import
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {thunk }from 'redux-thunk'; // Correct import

import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
