import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import MovieTitleCard from '../MovieTitleCard';
import { Provider } from 'react-redux';
import store from '../../../../store/store';

describe('MovieTitleCard', () => {
  const mockProps = {
    adult: false,
    backdrop_path: '/irlfhYtHfhZuYpsq2LAoh308NFe.jpg',
    belongs_to_collection: null,
    budget: 25000000,
    genres: [
      {
        id: 18,
        name: 'Drama',
      },
      {
        id: 80,
        name: 'Crime',
      },
    ],
    homepage: '',
    id: 278,
    imdb_id: 'tt0111161',
    original_language: 'en',
    original_title: 'The Shawshank Redemption',
    overview:
      'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    popularity: 35.625,
    poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    production_companies: [
      {
        id: 97,
        logo_path: '/7znWcbDd4PcJzJUlJxYqAlPPykp.png',
        name: 'Castle Rock Entertainment',
        origin_country: 'US',
      },
    ],
    production_countries: [
      {
        iso_3166_1: 'US',
        name: 'United States of America',
      },
    ],
    release_date: '1994-09-23',
    revenue: 28341469,
    runtime: 142,
    spoken_languages: [
      {
        english_name: 'English',
        iso_639_1: 'en',
        name: 'English',
      },
    ],
    status: 'Released',
    tagline: 'Fear can hold you prisoner. Hope can set you free.',
    title: 'The Shawshank Redemption',
    video: false,
    vote_average: 8.7,
    vote_count: 19085,
  };

  let fragment: any;
  beforeEach(() => {
    const asFragment = render(
      <Provider store={store}>
        <MovieTitleCard props={mockProps} />{' '}
      </Provider>
    );
    fragment = asFragment;
  });

  afterEach(() => {
    cleanup();
  });

  it('MovieTitleCard snapshot', () => {
    expect(fragment).toMatchSnapshot();
  });

  it('MovieTitleCard img must have attribute:', () => {
    expect(screen.getByRole(/img/i)).toHaveAttribute('src');
    expect(screen.getByRole(/img/i)).toHaveAttribute('height');
    expect(screen.getByRole(/img/i)).toHaveAttribute('alt');
  });
  it('MovieTitleCard heading must have:', () => {
    expect(screen.getByRole(/heading/i)).toHaveClass('title');
    expect(screen.getByRole(/heading/i)).toHaveTextContent(
      'The Shawshank Redemption'
    );
  });
  it('MovieTitleCard must be in the document:', () => {
    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/1994-09-23/i)).toBeInTheDocument();
    expect(screen.getByText(/Revenue/i)).toBeInTheDocument();
    expect(screen.getByText(/341/i)).toBeInTheDocument();
    expect(screen.getByText(/min/i)).toBeInTheDocument();
    expect(screen.getByText(/Drama/i)).toBeInTheDocument();
    expect(screen.getByText(/Crime/i)).toBeInTheDocument();
  });
});
