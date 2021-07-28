import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import './CharacterListPage.css';

const CharacterListPage = ({ characters }) => {
  const characterElements = characters.map((character) => (
    <li key={character._id}>
      <Character
        id={character._id}
        photoUrl={character.photoUrl}
        name={character.name}
      />
    </li>
  ));

  return <ul role="list">{characterElements}</ul>;

};

CharacterListPage.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      allies: PropTypes.array.isRequired,
      enemies: PropTypes.array.isRequired,
      photoUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      affiliation: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default CharacterListPage;
