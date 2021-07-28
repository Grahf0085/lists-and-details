import React, { Component } from 'react';
import CharacterListPage from '../components/characters/CharacterListPage';
import { fetchCharacters } from '../services/listAPI';

export default class CharacterList extends Component {
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

    if(loading) return <h1>Loading...</h1>;

    return <CharacterListPage characters={characters} />;
  }
}
