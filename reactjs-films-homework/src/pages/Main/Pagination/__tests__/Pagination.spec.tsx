import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Pagination from '../Pagination';

import { Provider } from 'react-redux';
import store from '../../../../store/store';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/',
  }),
}));

describe('Pagination', () => {
  let Fragment: any;

  beforeEach(() => {
    const { asFragment } = render(
      <Provider store={store}>
        <Pagination neededPages={5} />
      </Provider>
    );
    Fragment = asFragment();
  });

  afterEach(() => cleanup());

  it('Pagination snapshot', () => {
    expect(Fragment).toMatchSnapshot();
  });
});
