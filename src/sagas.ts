import { all, call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { Pokemon, PokemonDetail } from "./types";
import { fetchPokemons, fetchPokemonsSuccess, fetchPokemonsError, selectPokemon, selectPokemonSuccess } from "./reducers/pokemonSlice";

function* fetchPokemonsSaga(): Generator {
  try {
    const response = (yield call(axios.get, "https://pokeapi.co/api/v2/pokemon/")) as AxiosResponse<{
      results: Pokemon[];
    }>;
    const pokemons: Pokemon[] = response.data.results;
    yield put(fetchPokemonsSuccess(pokemons));
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(fetchPokemonsError(error.message));
    } else {
      yield put(fetchPokemonsError("An unknown error occurred"));
    }
  }
}

function* selectPokemonSaga(action: ReturnType<typeof selectPokemon>): Generator {
  try {
    const url = action.payload.url;
    const response = (yield call(axios.get, url)) as AxiosResponse<PokemonDetail>;
    const pokemonDetail: PokemonDetail = response.data;
    yield put(selectPokemonSuccess(pokemonDetail));
  } catch (error: unknown) {
    // ... (error handling code)
  }
}

function* rootSaga(): Generator {
  yield all([
    takeEvery(fetchPokemons, fetchPokemonsSaga),
    takeEvery(selectPokemon, selectPokemonSaga),
  ]);
}

export default rootSaga;
