import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import MovieCard from '../MovieCard';
import MovieCardMocks from '../mocks';

import { Provider } from 'react-redux';
import store from '../../../store/store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('MovieCard', () => {
  let fragment: any;
  const history = createMemoryHistory();
  history.push('/');

  beforeEach(() => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router history={history}>
          <MovieCard props={MovieCardMocks} />
        </Router>
      </Provider>
    );
    fragment = asFragment();
  });

  afterEach(() => cleanup());

  it('MovieCard snapshot', () => {
    expect(fragment).toMatchSnapshot();
  });

  it('MovieCard Must include rating', () => {
    expect(screen.getByText(/[0-9]/i)).toBeInTheDocument();
  });

  it('MovieCard IMG Must include attr alt', () => {
    expect(screen.getByRole('img')).toHaveAttribute('alt');
  });
});
