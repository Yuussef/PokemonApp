
import React from 'react';
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
  );
}

export default App;
