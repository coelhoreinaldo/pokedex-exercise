import React from 'react';

import './App.css';
import Pokedex from './components/Pokedex';

import pokemonList from './data';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      list: pokemonList,
    };
  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <Pokedex list={ list } />
      </div>
    );
  }
}

export default App;
