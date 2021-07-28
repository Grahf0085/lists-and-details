import React from 'react';
import { render } from '@testing-library/react';
import CharacterListPage from './CharacterListPage';

describe('Character component', () => {
  it('renders details', () => {
    const { asFragment } = render(
      <CharacterListPage
        characters="dsfdsf"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
