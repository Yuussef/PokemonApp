
import React from 'react';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from './store';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PokemonList />
      </div>
    </Provider>
=======
import './App.css';
import PokemonList from './components/PokemonList/PokemonList';

function App() {
  return (
    <div className="App">
 
      <PokemonList />
    </div>
>>>>>>> Feature/get-pokemon-list
  );
}

export default App;
