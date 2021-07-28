import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterList from './CharacterList';

describe('TLAB list', () => {
  it('displays a list of charcters', async () => {
    render(<CharacterList />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });
});
