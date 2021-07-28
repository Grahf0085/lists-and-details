import React from 'react';
import PropTypes from 'prop-types';

const CharDetailPage = ({ name }) => (

  <div>
    <p>{name}</p>
  </div>

);

CharDetailPage.propTypes = {
  name: PropTypes.string.isRequired
};

export default CharDetailPage;
