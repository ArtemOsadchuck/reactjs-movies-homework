import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import MovieCard from '../MovieCard';

describe('MovieCard', () => {
  const mockProps = {
    id: 724089,
    original_title: "Gabriel's Inferno Part II",
    overview:
      "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
    popularity: 7.824,
    poster_path: '/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg',
    release_date: '2020-07-31',
    title: "Gabriel's Inferno Part II",
    vote_average: 8.7,
  };

  afterEach(() => {
    cleanup();
  });

  it('MovieCard snapshot', () => {
    const { asFragment } = render(<MovieCard props={mockProps} />);
    expect(asFragment).toMatchSnapshot();
  });

  it('MovieCard Must include rating', () => {
    render(<MovieCard props={mockProps} />);
    expect(screen.getByText(/[0-9]/i)).toBeInTheDocument();
  });
  it('MovieCard Must include class movieCardLink', () => {
    render(<MovieCard props={mockProps} />);
    expect(screen.getByRole('link')).toHaveClass('movieCardLink');
  });
  it('MovieCard IMG Must include attr alt', () => {
    render(<MovieCard props={mockProps} />);
    expect(screen.getByRole('img')).toHaveAttribute('alt');
  });
});
