import React from 'react';
import { render, screen } from '@testing-library/react';
import CharDetail from './CharDetail';

describe('TLAB detail', () => {
  it('displays character details', async () => {
    render(<CharDetail />);

    screen.getByText('Loading...');

    const div = await screen.findByRole('omg');
    expect(div).not.toBeEmptyDOMElement();
  });
});
