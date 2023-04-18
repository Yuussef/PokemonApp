<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import store from './store';
import App from './App';



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
=======


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import {store} from "./store/store"
import pokemonReducer from './store/pokemon/pokemonSlice';
import { watchFetchPokemonsSaga } from './store/pokemon/pokemonSlice';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
>>>>>>> Feature/get-pokemon-list
  document.getElementById('root')
);
