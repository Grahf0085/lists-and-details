/* eslint-disable max-len */
import React, { Component } from 'react';
import { fetchCharDetails } from '../services/detailAPI';
import CharDetailPage from '../components/characters/CharacterDetailPage';
import PropTypes from 'prop-types';

export default class CharDetail extends Component {
  state = {
    detailsAPI: {},
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;

    const detailsAPI = await fetchCharDetails(match.params.id);

    this.setState({ detailsAPI, loading: false });
  }

  render() {
    const { detailsAPI, loading } = this.state;

    if(loading) return <h1>Loading...</h1>;
  
    return <CharDetailPage name={detailsAPI.name} gender={detailsAPI.gender} hair={detailsAPI.hair} weapon={detailsAPI.weapon} 
      profession={detailsAPI.profession} position={detailsAPI.position} affiliation={detailsAPI.affiliation}/>;
  }
}

CharDetail.propTypes = {
  match: PropTypes.object.isRequired
};
