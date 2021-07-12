import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  afterEach(() => {
    cleanup();
  });

  it('Header snapshot', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment).toMatchSnapshot();
  });
  it('Header Must include img', () => {
    render(<Header />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('Header Must include h1', () => {
    render(<Header />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  it('Header Must include button', () => {
    render(<Header />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
