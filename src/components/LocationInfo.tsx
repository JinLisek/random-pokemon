import { useParams } from "react-router-dom";
import axios from "axios";
import { ReactNode, useEffect, useState } from "react";

interface AreaApiData {
  name: string;
  url: string;
}

interface Pokemon {
  name: string;
}

interface PokemonEncounter {
  pokemon: Pokemon;
}

const getAreaEncounters = async (areaName: string) => {
  const resp = await axios.get(`https://pokeapi.co/api/v2/location-area/${areaName}`);
  return resp.data.pokemon_encounters;
};

const getLocationEncounters = async (locationName: string) => {
  const resp = await axios.get(`https://pokeapi.co/api/v2/location/${locationName}`);
  const promises = resp.data.areas.map((area: AreaApiData) => getAreaEncounters(area.name));
  const results = await Promise.all(promises);
  const flatResults = results.flat();
  let pokemonMap = new Map<string, PokemonEncounter[]>();
  flatResults.forEach((encounter: PokemonEncounter) => {
    if (!pokemonMap.has(encounter.pokemon.name)) pokemonMap.set(encounter.pokemon.name, []);
    pokemonMap.get(encounter.pokemon.name)?.push(encounter);
  });
  return pokemonMap;
};

const LocationInfo = () => {
  const { locationName } = useParams();
  const [encounters, setEncounters] = useState<Map<string, PokemonEncounter[]>>();

  useEffect(() => {
    if (locationName == null) return;
    getLocationEncounters(locationName).then((newEncounters) => setEncounters(newEncounters));
  }, [locationName]);

  let encountersList: ReactNode[] = [];

  encounters?.forEach((pokemonEncounters: PokemonEncounter[]) => {
    const elements: ReactNode[] = pokemonEncounters.map((encounter: PokemonEncounter) => (
      <li key={encounter.pokemon.name}>{encounter.pokemon.name}</li>
    ));
    encountersList.push(...elements);
  });

  return <ul>{encountersList}</ul>;
};

export default LocationInfo;
