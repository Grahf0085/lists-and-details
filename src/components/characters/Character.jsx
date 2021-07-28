import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Character.css';

const Character = ({ id, photoUrl, name }) => (
  
  <Link to={`/character/${id}`}>
    <img src={photoUrl} alt={name} />
  </Link>

);

Character.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
};

export default Character;
