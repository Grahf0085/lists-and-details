import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ id, photoUrl, name }) => (

  // <figure>
  //   <img src={photoUrl} alt={name} />
  //   <figcaption>
  //     <p>{name}</p>
  //     <p>{affiliation}</p>
  //     <p>{allies}</p>
  //     <p>{enemies}</p>
  //   </figcaption>
  // </figure>

  <Link to={`/${id}`}>
    <img src={photoUrl} alt={name} />
  </Link>

  // <img src={photoUrl} alt={name} />

);

Character.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  allies: PropTypes.array.isRequired,
  enemies: PropTypes.array.isRequired,
  photoUrl: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
};

export default Character;
