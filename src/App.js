import React, {useEffect, useState} from 'react';
import Header from './Components/Header';
import PokemonForm from './Components/PokemonForm';
import PokemonCard from './Components/PokemonCard';

const App = () => {

  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasValidKeys, setHasValidKeys] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      const keys = ['name', 'types', 'weight', 'height', 'sprites']
      const isValid = data && keys.every(key => data.hasOwnProperty(key));
      setHasValidKeys(isValid);
      if (isValid) {
        console.log(data);
        setPokemonData(data);
        setIsVisible(true);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event) => {
    setPokemonName(event.target.value);
  };

    return (
      <div>
        <Header />
        <PokemonForm handleChange={handleChange} handleSubmit={handleSubmit} />
        {isVisible && hasValidKeys && <PokemonCard handleClose={handleClose} pokemonData={pokemonData}/>}
      </div>
    );
}

export default App;