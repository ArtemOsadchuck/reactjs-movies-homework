import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import MovieCard from '../MovieCard';
import { Provider } from 'react-redux';
import store from '../../../store/store';

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

  let Fragment: any;
  beforeEach(() => {
    const { asFragment } = render(
      <Provider store={store}>
        <MovieCard props={mockProps} />{' '}
      </Provider>
    );
    Fragment = asFragment();
  });

  afterEach(() => {
    cleanup();
  });

  it('MovieCard snapshot', () => {
    expect(Fragment).toMatchSnapshot();
  });

  it('MovieCard Must include rating', () => {
    expect(screen.getByText(/[0-9]/i)).toBeInTheDocument();
  });

  it('MovieCard IMG Must include attr alt', () => {
    expect(screen.getByRole('img')).toHaveAttribute('alt');
  });
});
