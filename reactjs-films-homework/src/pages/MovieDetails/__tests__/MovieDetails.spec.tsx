import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import MovieDetails from '../MovieDetails';

describe('MovieDetails', () => {
  afterEach(() => {
    cleanup();
  });

  it('MovieDetails snapshot', () => {
    const { asFragment } = render(<MovieDetails />);
    expect(asFragment).toMatchSnapshot();
  });

  it('MovieDetails Must have class:', () => {
    const { container } = render(<MovieDetails />);
    expect(container.firstChild).toHaveClass('mainWrapper');
    expect(container.firstChild!.childNodes[0]).toHaveClass('castWrapper');
    expect(container.firstChild!.childNodes[1]).toHaveClass(
      'recommendationsWrapper'
    );
  });
  it('MovieDetails heading`s must defined', () => {
    render(<MovieDetails />);
    expect(screen.getAllByRole('heading')).toBeDefined();
    screen.getAllByRole('heading').forEach((el) => {
      expect(el).toBeDefined();
    });
  });
  it('MovieDetails ShowAll button include class:', () => {
    render(<MovieDetails />);
    expect(screen.getByText(/Show|all/i)).toHaveClass('castNameShowAllBtn');
  });
  it('MovieDetails recommendations must be in the document:', () => {
    render(<MovieDetails />);
    expect(screen.getByText(/RECOMMENDATIONS/i)).toBeInTheDocument();
  });
  it('MovieDetails Loading... must be in the document:', () => {
    render(<MovieDetails />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
