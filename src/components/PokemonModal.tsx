import React from "react";
import { PokemonDetail } from "../types";

type PokemonModalProps = {
  pokemon: PokemonDetail;
  closeModal: () => void;
};

const PokemonModal: React.FC<PokemonModalProps> = ({ pokemon, closeModal }) => {
  return (
    <div className="pokemon-modal">
      <div className="pokemon-modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>
          <strong>ID:</strong> {pokemon.id}
        </p>
        <p>
          <strong>Height:</strong> {pokemon.height}
        </p>
        <p>
          <strong>Weight:</strong> {pokemon.weight}
        </p>
        <p>
          <strong>Types:</strong>{" "}
          {pokemon.types.map((typeObj) => typeObj.type.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default PokemonModal;
