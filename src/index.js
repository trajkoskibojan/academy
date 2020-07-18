import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger'

import App from './App';
import homeReducer from 'store/reducers/home';
import * as serviceWorker from './serviceWorker';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducers = combineReducers({
  home: homeReducer
})

const store = createStore(rootReducers, composeEnhancers(applyMiddleware(logger)))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
