import React, { useEffect, useState } from 'react';

const PokemonForm = ({handleChange, handleSubmit}) => {

  // useEffect(() => { 
  //   console.log(pokemonName);
  // }, [pokemonName])

  

  return (
    <form id="pokemonForm" onSubmit={handleSubmit}>
      <label htmlFor="pokemonName">Enter Pokemon Name:</label>
      <input type="text" id="pokemonName" name="pokemonName" onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
}

export default PokemonForm;