/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const CharDetailPage = ({ name, gender, hair, weapon, profession, position, affiliation }) => (

  <div>
    <p>{name}</p>
    <p>{gender}</p>
    <p>{hair}</p>
    <p>{weapon}</p>
    <p>{profession}</p>
    <p>{position}</p>
    <p>{affiliation}</p>
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
