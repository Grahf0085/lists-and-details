import React from 'react';
import { render, screen } from '@testing-library/react';
import TheLastAirBenderCharacters from './TlabCharacters';

describe('TLAB container', () => {
  it('displays a list of charcters', async () => {
    render(<TheLastAirBenderCharacters />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });
});
