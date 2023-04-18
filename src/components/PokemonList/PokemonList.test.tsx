import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import PokemonList from './PokemonList';

test('renders PokemonList component without crashing', () => {
  render(
    <Provider store={store}>
      <PokemonList />
    </Provider>
  );
});

test('displays loading state while fetching data', async () => {
  const { findByText } = render(
    <Provider store={store}>
      <PokemonList />
    </Provider>
  );

  expect(await findByText(/Loading.../i)).toBeInTheDocument();
});
