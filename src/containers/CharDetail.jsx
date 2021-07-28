import React, { Component } from 'react';
import { fetchCharDetails } from '../services/tlabDetail';
import CharDetailPage from '../components/characters/CharacterDetailPage';
import PropTypes from 'prop-types';

export default class TlabDetails extends Component {
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
  
    return <CharDetailPage name={detailsAPI.name} />;
  }
}

TlabDetails.propTypes = {
  match: PropTypes.object.isRequired
};
