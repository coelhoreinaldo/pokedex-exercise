import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonIndex: 0,
      // typeFiltered: '',
    };
    this.handleClick = this.handleClick.bind(this);
    // this.handleClickFilter = this.handleClickFilter.bind(this);
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

  // handleClickFilter({ target }) {
  //   const { pokemonList } = this.props;
  //   const { typeFiltered } = this.state;

  //   this.setState(() => ({
  //     typeFiltered: pokemonList.find((pokemon) => pokemon.type === 'Fire').type,
  //   }));
  // }

  render() {
    const { pokemonIndex } = this.state;
    const { pokemonList } = this.props;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={ pokemonList[pokemonIndex] } />
          {/* <button onClick={ this.handleClickFilter }>Fire</button>
          <button onClick={ this.handleClickFilter }>Psychic</button> */}
          <button onClick={ this.handleClick }>Próximo pokémon</button>
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
