import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { Pokemon } from '../types';

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
      <Modal isOpen={showModal} onRequestClose={closeModal} contentLabel="Pokemon Details">
        {details ? (
          <div>
            <h2>{details.name}</h2>
            {/* Render more details here */}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </Modal>
    </div>
  );
};

export default PokemonDetails;
