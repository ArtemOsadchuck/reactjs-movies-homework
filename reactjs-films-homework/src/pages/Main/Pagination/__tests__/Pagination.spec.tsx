import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Pagination from '../Pagination';

describe('Pagination', () => {
  it('Pagination snapshot', () => {
    const { container } = render(<Pagination />);
    expect(container).toMatchSnapshot();
  });
  it('Pagination must include class', () => {
    render(<Pagination />);
    expect(screen.getByText(/1/i)).toHaveClass('active');
    expect(screen.getByText(/2/i)).not.toHaveClass('active');
  });
});
