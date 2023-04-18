
import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { fetchPokemonsRequest } from '../../store/pokemon/pokemonSlice';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import './PokemonList.css';

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const { pokemons, loading, error } = useSelector((state: RootState) => state.pokemon);
  const [showModal, setShowModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [count,setCount]= useState(2);

  useEffect(() => {
    dispatch(fetchPokemonsRequest(20));
  }, [dispatch]);

  const openModal = (pokemon: any) => {
    setSelectedPokemon(pokemon);
    setShowModal(true);
  };
  const handleLoadMore=()=>{
    dispatch(fetchPokemonsRequest(20*count));
    setCount(count+1)
  }
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
      <button onClick={handleLoadMore}>Load more</button>
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">Error: {error}</div>}
      <PokemonDetails showModal={showModal} setShowModal={setShowModal} pokemon={selectedPokemon} />
    </div>
  );
};

export default PokemonList;
