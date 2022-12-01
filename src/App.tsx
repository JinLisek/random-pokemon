import React, { useEffect } from 'react';
import axios from 'axios';

import './App.css';
import PokemonList from './components/PokemonList';

const bulbapediaWikiUrl = 'https://bulbapedia.bulbagarden.net/wiki'

const getRoutePokemons = async (route: string) => {
  let resp = await axios.get(`${bulbapediaWikiUrl}/${route}`);
  return ['Aaa', 'Bbb'];
}

function App() {
  const [pokemons, setPokemons] = React.useState<string[]>([])
  const route = 'South_Province_(Area_One)';
  
  useEffect(() => {
    getRoutePokemons(route).then((newPokemons) => setPokemons(newPokemons));
  });

  return (
    <div className="App">
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
