import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map((character) => (
    <li key={character._id}>
      <Character
        id={character._id}
        allies={character.allies}
        enemies={character.enemies}
        photoUrl={character.photoUrl}
        name={character.name}
        affiliation={character.affiliation}
      />
    </li>
  ));

  return <ul>{characterElements}</ul>;

};

CharacterList.propTypes = {
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

export default CharacterList;
