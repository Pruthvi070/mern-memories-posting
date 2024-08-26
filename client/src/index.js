import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk'; // Fixed import
import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

const root = createRoot(document.getElementById('root')); // Create a root.
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
