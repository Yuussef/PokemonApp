<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
=======
// src/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

test('renders App component without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

test('renders PokemonList component', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const pokemonListElement = screen.getByTestId('pokemon-list');
  expect(pokemonListElement).toBeInTheDocument();
>>>>>>> Feature/get-pokemon-list
});
