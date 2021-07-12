import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import MovieTitleCard from '../MovieTitleCard';
import MovieTitleCardMocks from '../mocks';

import { Provider } from 'react-redux';
import store from '../../../../store/store';

describe('MovieTitleCard', () => {
  let fragment: any;

  beforeEach(() => {
    const { asFragment } = render(
      <Provider store={store}>
        <MovieTitleCard props={MovieTitleCardMocks} />{' '}
      </Provider>
    );
    fragment = asFragment();
  });

  afterEach(() => cleanup());

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
