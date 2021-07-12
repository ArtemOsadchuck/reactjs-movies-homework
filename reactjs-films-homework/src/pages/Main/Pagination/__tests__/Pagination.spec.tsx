import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Pagination from '../Pagination';

import { Provider } from 'react-redux';
import store from '../../../../store/store';

describe('Pagination', () => {
  let Fragment: any;

  beforeEach(() => {
    const { asFragment } = render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
    Fragment = asFragment();
  });

  afterEach(() => cleanup());

  it('Pagination snapshot', () => {
    expect(Fragment).toMatchSnapshot();
  });
});
