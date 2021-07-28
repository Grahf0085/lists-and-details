/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './CharacterDetailPage.css';

const CharDetailPage = ({ name, gender, hair, weapon, profession, position, affiliation }) => (

  <div>
    <p>Name: {name}</p>
    <p>Gender: {gender}</p>
    <p>Hair: {hair}</p>
    <p>Weapon: {weapon}</p>
    <p>Job: {profession}</p>
    <p>Position: {position}</p>
    <p>Party: {affiliation}</p>
  </div>

);

CharDetailPage.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  hair: PropTypes.string.isRequired,
  weapon: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired
};

export default CharDetailPage;
