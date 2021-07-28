import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  it('renders Character', () => {
    const { asFragment } = render(
      <Character
        name="Text Character"
        id="983247fdssf"
        photoUrl="http://image.com/image.png"
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
