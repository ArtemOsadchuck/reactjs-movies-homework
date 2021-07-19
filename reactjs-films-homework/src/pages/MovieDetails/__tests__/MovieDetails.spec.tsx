import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import MovieDetails from '../MovieDetails';

import { Provider } from 'react-redux';
import store from '../../../store/store';

describe('MovieDetails', () => {
  let fragment: any;

  const history = createMemoryHistory();
  history.push('/');

  beforeEach(() => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router history={history}>
          <MovieDetails />
        </Router>
      </Provider>
    );
    fragment = asFragment();
  });

  afterEach(() => cleanup());

  it('MovieDetails snapshot', () => {
    expect(fragment).toMatchSnapshot();
  });

  it('MovieDetails heading`s must defined', () => {
    expect(screen.getAllByRole('heading')).toBeDefined();
    screen.getAllByRole('heading').forEach((el) => {
      expect(el).toBeDefined();
    });
  });

  it('MovieDetails ShowAll button include class:', () => {
    expect(screen.getByText(/Show|all/i)).toHaveClass('castNameShowAllBtn');
  });

  it('MovieDetails recommendations must be in the document:', () => {
    expect(screen.getByText(/RECOMMENDATIONS/i)).toBeInTheDocument();
  });

  it('MovieDetails Loading... must be in the document:', () => {
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
