import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import pokemonSlice from "./reducers/pokemonSlice";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  pokemon: pokemonSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
