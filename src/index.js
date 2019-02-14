import css from './static/css/globals.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
import { applyMiddleware , createStore } from 'redux'
import reduxLogger from "redux-logger"

import rootReducer from './reducers'
import ReduxThunk from 'redux-thunk'

import App from './containers/App/App.view';

const middleware = applyMiddleware(reduxLogger, ReduxThunk);

const store = createStore(rootReducer,{},  composeWithDevTools(middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.main'));