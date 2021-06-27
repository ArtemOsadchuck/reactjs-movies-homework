import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('App test', () => {
  const { asFragment } = render(<App />);
  //   screen.debug();
  expect(asFragment).toMatchSnapshot();
});
