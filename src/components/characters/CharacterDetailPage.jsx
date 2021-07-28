import React from 'react';
import PropTypes from 'prop-types';

const CharDetailPage = () => (

  
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

// CharDetailPage.propTypes = {
//   name: PropTypes.string.isRequired,
//   allies: PropTypes.array.isRequired,
//   enemies: PropTypes.array.isRequired,
//   photoUrl: PropTypes.string.isRequired,
//   affiliation: PropTypes.string.isRequired,
// };

export default CharDetailPage;
