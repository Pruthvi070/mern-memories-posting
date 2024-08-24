import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { createStore } from 'redux';
import { thunk } from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';

// This will add support for Redux DevTools
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = createStore(
  reducers, 
  composeEnhancers(applyMiddleware(thunk))
);

// New way to render with React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);