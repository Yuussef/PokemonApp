// src/components/PokemonDetails.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Pokemon } from '../types';
import './PokemonDetails.css';

interface Props {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  pokemon: Pokemon | null; // Allow the pokemon prop to be null
}

const PokemonDetails: React.FC<Props> = ({ showModal, setShowModal, pokemon }) => {
  const [details, setDetails] = useState<Pokemon | null>(null);

  useEffect(() => {
    if (pokemon) {
      axios.get(pokemon.url).then((response) => setDetails(response.data));
    }
  }, [pokemon]);

  const closeModal = () => {
    setShowModal(false);
    setDetails(null);
  };

  return (
    <div>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Pokemon Details"
        className="pokemon-details-modal"
      >
        {details ? (
          <div className="pokemon-details">
            <h2>{details.name}</h2>
            {details.sprites?.front_default && (
              <img
                src={details.sprites?.front_default}
                alt={details.name}
                className="pokemon-image"
              />
            )}
            <h3>Stats</h3>
            <ul className="pokemon-stats">
              {details.stats.map((stat, index) => (
                <li key={index}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
            <h3>Abilities</h3>
            <ul className="pokemon-abilities">
              {details.abilities?.map((ability, index) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </Modal>
    </div>
  );
};

export default PokemonDetails;
