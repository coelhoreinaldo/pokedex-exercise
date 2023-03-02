import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonIndex: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { pokemonIndex } = this.state;
    const { pokemonList } = this.props;
    if (pokemonIndex === pokemonList.length - 1) {
      this.setState(() => ({
        pokemonIndex: -1,
      }));
    }
    this.setState((previousState) => ({
      pokemonIndex: previousState.pokemonIndex + 1,
    }));
  }

  // handleClickFilter() {
    
  // }

  render() {
    const { pokemonIndex } = this.state;
    const { pokemonList } = this.props;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={ pokemonList[pokemonIndex] } />
          <button onClick={ this.handleClick }>Próximo pokémon</button>
          {/* <button onClick={handleClickFilter}>Fire</button>
          <button onClick={handleClickFilter}>Psychic</button> */}
          {/* { pokemonList
            .map((pokemon) => <Pokemon key={ pok  emon.id } pokemon={ pokemon } />) } */
          }
        </div>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
