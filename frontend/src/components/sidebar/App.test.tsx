import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuIndex from './sidebar';

test('renders learn react link', () => {
  render(<MenuIndex />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
