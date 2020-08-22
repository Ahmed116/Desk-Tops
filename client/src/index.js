import React from 'react';
import { createStore, combinReducers } from 'redux';
import store from './../src/reducers/store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import SignupOwner from '../src/components/signupOwner/signupOwner';
// import store from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import counterReducer from './reducers/counter';
import allReducer from './reducers';
ReactDOM.render(
    <React.StrictMode>
   <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export default store;
