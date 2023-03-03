import React from 'react';

import Pokemon from './Pokemon';
import pokemonList from '../data';

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
      renderedList: pokemonList.filter((pokemon) => pokemon.type.includes(type)),
    }));
  }

  resetListState() {
    this.setState(() => ({
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
          <button onClick={ () => this.handleClickFilter('Fire') }>Fire</button>
          <button onClick={ () => this.handleClickFilter('Psychic') }>Psychic</button>
          <button onClick={ this.resetListState }>All</button>
          <button onClick={ this.handleClick }>Próximo pokémon</button>
        </div>
      </>
    );
  }
}

export default Pokedex;
