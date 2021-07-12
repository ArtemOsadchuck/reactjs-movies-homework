import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import Main from '../Main';

import { Provider } from 'react-redux';
import store from '../../../store/store';

describe('Main', () => {
  let Fragment: any;

  beforeEach(() => {
    const { asFragment } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    Fragment = asFragment();
  });

  afterEach(() => {
    cleanup();
  });

  it('Main snapshot', () => {
    expect(Fragment).toMatchSnapshot();
  });

  it('Main heading must include text Loading...', () => {
    expect(screen.getByRole('heading')).toBeDefined();
  });

  it('Main  must include inner text', () => {
    expect(screen.getByText(/NO RESULTS FOUND/i)).toBeDefined();
  });
});
