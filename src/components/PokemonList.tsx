import PropTypes from 'prop-types';

interface PokemonListProps {
    pokemons: string[]
}

const PokemonList = (props: PokemonListProps) => {
  return (
    <ul>
        {props.pokemons.map((pokemon: string) => (
        <li>
          {pokemon}
        </li>
      ))}
    </ul>
  );
}

export default PokemonList;
