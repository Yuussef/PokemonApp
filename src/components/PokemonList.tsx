import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import { fetchPokemons, selectPokemon } from "../reducers/pokemonSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { Pokemon } from "../types";
import PokemonModal from "./PokemonModal";

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, pokemons, selectedPokemon } = useSelector(
    (state: RootState) => state.pokemon
  );
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const handleSelectPokemon = (pokemon: Pokemon) => {
    dispatch(selectPokemon(pokemon));
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      <InfiniteScroll
        dataLength={pokemons.length}
        next={() => dispatch(fetchPokemons())}
        hasMore={true}
        loader={<div>Loading more...</div>}
      >
        <div className="pokemon-list">
          {pokemons.map((pokemon) => (
            <div
              key={pokemon.name}
              className="pokemon-item"
              onClick={() => handleSelectPokemon(pokemon)}
            >
              {pokemon.name}
            </div>
          ))}
        </div>
      </InfiniteScroll>
      {showModal && selectedPokemon && (
        <PokemonModal pokemon={selectedPokemon} closeModal={closeModal} />
      )}
    </div>
  );
};

export default PokemonList;
