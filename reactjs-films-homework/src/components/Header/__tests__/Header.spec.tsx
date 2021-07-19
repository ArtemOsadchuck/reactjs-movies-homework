import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Header from '../Header';
import { Provider } from 'react-redux';
import store from '../../../store/store';

describe('Header', () => {
  let fragment: any;
  const history = createMemoryHistory();
  history.push('/');

  beforeEach(() => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router history={history}>
          <Header />
        </Router>
      </Provider>
    );
    fragment = asFragment();
  });

  afterEach(() => {
    cleanup();
  });

  it('Snapshot', () => {
    expect(fragment).toMatchSnapshot();
  });

  it('Must include img', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('Must include h1', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('Must include button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
