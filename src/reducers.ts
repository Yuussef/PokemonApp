import { combineReducers } from "@reduxjs/toolkit";
import pokemonReducer from "./reducers/pokemonSlice";

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
