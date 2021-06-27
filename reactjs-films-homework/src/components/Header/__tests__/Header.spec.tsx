import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import Header from '../Header';
import { Provider } from 'react-redux';
import store from '../../../store/store';

describe('Header', () => {
  let Fragment: any;
  beforeEach(() => {
    const asFragment = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    Fragment = asFragment;
  });

  afterEach(() => {
    cleanup();
  });

  it('Header snapshot', () => {
    expect(Fragment).toMatchSnapshot();
  });
  it('Header Must include img', () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('Header Must include h1', () => {
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  it('Header Must include button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
