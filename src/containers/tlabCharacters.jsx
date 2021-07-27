import React, { Component } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { fetchCharacters } from '../services/tlabAPI';

export default class TheLastAirBenderCharacters extends Component {
  state = {
    charcters: [],
    loaidng: true,
  };

  async componentDidMount() {
    const characters = await fetchCharacters();
    this.setState({ characters, loading: false });
  }

  render() {
    const { charcters, loading } = this.state;

    if(loading) return <h1>Loading...</h1>;

    return <CharacterList characters={charcters} />;
  }
}
