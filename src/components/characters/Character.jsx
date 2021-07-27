import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ allies, enemies, photoUrl, name, affiliation }) => (
  <figure>
    <img src={photoUrl} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{affiliation}</p>
      <p>{allies}</p>
      <p>{enemies}</p>
    </figcaption>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  allies: PropTypes.array.isRequired,
  enemies: PropTypes.array.isRequired,
  photoUrl: PropTypes.string.isRequired,
  affiliation: PropTypes.string.isRequired,
};

export default Character;
