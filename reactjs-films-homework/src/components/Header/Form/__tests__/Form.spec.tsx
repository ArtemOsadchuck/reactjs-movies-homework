import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../Form';

describe('Form', () => {
  render(<Form />);
  it('Form snapshot', () => {
    const { asFragment } = render(<Form />);
    //   screen.debug();
    expect(asFragment).toMatchSnapshot();
  });
  it('placeholder text', () => {
    render(<Form />);
    expect(screen.getByPlaceholderText(/Movies/i)).toBeInTheDocument();
  });
  it('Must has not default value', () => {
    render(<Form />);
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });
});
