// src/components/PokemonList.tsx
import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { fetchPokemonsRequest } from '../features/pokemon/pokemonSlice';
import PokemonDetails from './PokemonDetails';
import './PokemonList.css';

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const { pokemons, loading, error } = useSelector((state: RootState) => state.pokemon);
  const [showModal, setShowModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    dispatch(fetchPokemonsRequest(2));
  }, [dispatch]);

  const openModal = (pokemon: any) => {
    setSelectedPokemon(pokemon);
    setShowModal(true);
  };

  useEffect(() => {
    console.log('pokemons', pokemons);
  }, [pokemons]);

  return (
    <div className="pokemon-list">
      <div className="grid">
        {pokemons?.map((pokemon) => (
          <div key={pokemon.name} className="pokemon-card" onClick={() => openModal(pokemon)}>
            {pokemon.name}
          </div>
        ))}
      </div>
      <button onClick={() => dispatch(fetchPokemonsRequest(2))}>Load more</button>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      <PokemonDetails showModal={showModal} setShowModal={setShowModal} pokemon={selectedPokemon} />
    </div>
  );
};

export default PokemonList;
