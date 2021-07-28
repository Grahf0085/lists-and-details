import React from 'react';
import { render } from '@testing-library/react';
import CharacterDetailPage from './CharacterDetailPage';

describe('Character component', () => {
  it('renders details', () => {
    const { asFragment } = render(
      <CharacterDetailPage
        name="Text Character"
        gender="983247fdssf"
        hair="http://image.com/image.png"
        weapon="Text Character"
        profession="983247fdssf"
        position="http://image.com/image.png"
        affiliation="Text Character"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
