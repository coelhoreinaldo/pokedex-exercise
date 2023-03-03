import React from 'react';

import Pokemon from './Pokemon';
import pokemonList from '../data';
import Button from './Button';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonIndex: 0,
      list: pokemonList,
    };

    this.nextPokemon = this.nextPokemon.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.resetListState = this.resetListState.bind(this);
  }

  nextPokemon() {
    const { pokemonIndex, list } = this.state;
    if (pokemonIndex === list.length - 1) {
      this.setState(() => ({
        pokemonIndex: -1,
      }));
    }
    this.setState((previousState) => ({
      pokemonIndex: previousState.pokemonIndex + 1,
    }));
  }

  filterPokemon(type) {
    this.setState(() => ({
      pokemonIndex: 0,
      list: pokemonList.filter((pokemon) => pokemon.type.includes(type)),
    }));
  }

  resetListState() {
    this.setState(() => ({
      pokemonIndex: 0,
      list: pokemonList,
    }));
  }

  render() {
    const { pokemonIndex, list } = this.state;
    const types = pokemonList.reduce((acc, { type }) => {
      if (!acc.includes(type)) {
        acc.push(type);
      }
      return acc;
    }, []);
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={ list[pokemonIndex] } />
          { types.map((type) => (
            <Button key={ type } onClick={ () => this.filterPokemon(type) }>
              { type }
            </Button>))}
          <Button
            onClick={ this.resetListState }
          >
            All
          </Button>
          <Button
            onClick={ this.nextPokemon }
            disabled={ list.length <= 1 }
          >
            Próximo pokémon
          </Button>
        </div>
      </>
    );
  }
}

export default Pokedex;
