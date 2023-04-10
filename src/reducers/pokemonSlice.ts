import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon, PokemonDetail } from '../types';

interface PokemonState {
  loading: boolean;
  pokemons: Pokemon[];
  error: string | null;
  selectedPokemon: PokemonDetail | null;
}

const initialState: PokemonState = {
  loading: false,
  pokemons: [],
  error: null,
  selectedPokemon: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    fetchPokemons: (state) => {
      state.loading = true;
    },
    fetchPokemonsSuccess: (state, action: PayloadAction<Pokemon[]>) => {
      state.loading = false;
      state.pokemons = action.payload;
      state.error = null;
    },
    fetchPokemonsError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    selectPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.loading = true;
    },
    selectPokemonSuccess: (state, action: PayloadAction<PokemonDetail>) => {
      state.loading = false;
      state.selectedPokemon = action.payload;
      state.error = null;
    },
  },
});

export const {
  fetchPokemons,
  fetchPokemonsSuccess,
  fetchPokemonsError,
  selectPokemon,
  selectPokemonSuccess,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;
