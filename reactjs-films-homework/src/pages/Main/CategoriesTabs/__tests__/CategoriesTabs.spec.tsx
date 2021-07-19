import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import CategoriesTabs from '../CategoriesTabs';

import { Provider } from 'react-redux';
import store from '../../../../store/store';

describe('CategoriesTabs', () => {
  const history = createMemoryHistory();
  history.push('/');

  it('CategoriesTabs snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router history={history}>
          <CategoriesTabs />
        </Router>
      </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});
