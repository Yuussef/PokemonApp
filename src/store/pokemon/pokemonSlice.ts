
import axios,{ AxiosResponse } from "axios";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";


interface PokemonState {
  loading: boolean;
  pokemons: any[];
  error: string | null;
}

const initialState: PokemonState = {
  loading: false,
  pokemons: [],
  error: null,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    fetchPokemonsRequest: (state, action: PayloadAction<number>) => {
      state.loading = true;
    },
    fetchPokemonsSuccess: (state, action: PayloadAction<any[]>) => {
      state.loading = false;
      state.pokemons = [...state.pokemons, ...action.payload];
    },
    fetchPokemonsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPokemonsRequest,
  fetchPokemonsSuccess,
  fetchPokemonsFailure,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;

const fetchPokemons = async (limit: number): Promise<any[]> => {
  const response: AxiosResponse = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );
  return (response.data.results as any[]);
};

function* fetchPokemonsSaga(action: PayloadAction<number>): Generator {
  try {
    const pokemons: any[] = (yield call(fetchPokemons, action.payload)) as any[];
    yield put(fetchPokemonsSuccess(pokemons));
  } catch (error: any) {
    yield put(fetchPokemonsFailure(error.message));
  }
}

export function* watchFetchPokemonsSaga(): Generator {
  yield takeEvery(fetchPokemonsRequest.type, fetchPokemonsSaga);
}
