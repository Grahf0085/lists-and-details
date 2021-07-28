import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  it('renders Character', () => {
    const { asFragment } = render(
      <Character
        name="Text Character"
        affiliation="Plasma Nation"
        allies="Gaint Monkey"
        enemies="Water Lord"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
