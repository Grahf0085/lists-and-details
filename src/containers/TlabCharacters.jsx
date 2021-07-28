import React, { Component } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { fetchCharacters } from '../services/tlabAPI';

export default class TheLastAirBenderCharacters extends Component {
  state = {
    characters: [],
    loading: true,
  };

  async componentDidMount() {
    const characters = await fetchCharacters();
    this.setState({ characters, loading: false });
  }

  render() {
    const { characters, loading } = this.state;
    console.log(characters);
    if(loading) return <h1>Loading...</h1>;

    return <CharacterList characters={characters} />;
  }
}
