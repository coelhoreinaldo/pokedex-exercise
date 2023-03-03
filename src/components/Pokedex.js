import React from 'react';

import Pokemon from './Pokemon';
import pokemonList from '../data';
import Button from './Button';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonIndex: 0,
      renderedList: pokemonList,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickFilter = this.handleClickFilter.bind(this);
    this.resetListState = this.resetListState.bind(this);
  }

  handleClick() {
    const { pokemonIndex, renderedList } = this.state;
    if (pokemonIndex === renderedList.length - 1) {
      this.setState(() => ({
        pokemonIndex: -1,
      }));
    }
    this.setState((previousState) => ({
      pokemonIndex: previousState.pokemonIndex + 1,
    }));
  }

  handleClickFilter(type) {
    this.setState(() => ({
      pokemonIndex: 0,
      renderedList: pokemonList.filter((pokemon) => pokemon.type.includes(type)),
    }));
  }

  resetListState() {
    this.setState(() => ({
      pokemonIndex: 0,
      renderedList: pokemonList,
    }));
  }

  render() {
    const { pokemonIndex, renderedList } = this.state;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={ renderedList[pokemonIndex] } />
          <Button
            onClick={ () => this.resetListState() }
          >
            All
          </Button>
          <Button
            onClick={ () => this.handleClickFilter('Fire') }
          >
            Fire
          </Button>
          <Button
            onClick={ () => this.handleClickFilter('Psychic') }
          >
            Psychic
          </Button>
          <Button
            onClick={ () => this.handleClick() }
          >
            Próximo pokémon
          </Button>
        </div>
      </>
    );
  }
}

export default Pokedex;
