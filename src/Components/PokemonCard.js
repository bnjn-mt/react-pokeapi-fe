import React, { useEffect, useState } from 'react';

const PokemonCard = ({pokemonData, handleClose}) => {

  useEffect(() => {
    // console.log(pokemonData);
    // console.log(hasValidKeys);
  }, [pokemonData]);

  return (
    <>
        <div id="pokemonCard">
          <div id="innerCardContainer">
            <div className="cardHeader">
              <h2 id="pokemonCardName">{pokemonData.name}</h2>
              <button id="close" onClick={handleClose}>X</button>
            </div>
            <div id="cardImgBorder">
              <img id="pokemonImg" src={pokemonData.sprites.front_default} alt="" />
            </div>
            <div className="pokemonInfo">
              <p id="pokemonType">Type: {pokemonData.types[0].type.name}</p>
              <p id="pokemonWeight">Weight: {pokemonData.weight}</p>
              <p id="pokemonHeight">Height: {pokemonData.height}</p>
            </div>
          </div>
        </div>
    </>
  );
}

export default PokemonCard;