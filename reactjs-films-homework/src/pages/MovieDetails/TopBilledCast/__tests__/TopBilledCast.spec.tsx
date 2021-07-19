import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import TopBilledCast from '../TopBilledCast';
import TopBilledCastMocks from '../mocks';

import { Provider } from 'react-redux';
import store from '../../../../store/store';

describe('TopBilledCast', () => {
  let fragment: any;

  const history = createMemoryHistory();
  history.push('/');

  beforeEach(async () => {
    const { asFragment } = await render(
      <Provider store={store}>
        <Router history={history}>
          <TopBilledCast props={TopBilledCastMocks} />
        </Router>
      </Provider>
    );
    fragment = asFragment();
  });

  afterEach(() => cleanup());

  it('TopBilledCast snapshot', () => {
    expect(fragment).toMatchSnapshot();
  });

  it('TopBilledCast img must have attribute:', () => {
    expect(screen.getByRole(/img/i)).toHaveAttribute('alt');
    expect(screen.getByRole(/img/i)).toHaveAttribute('height');
    expect(screen.getByRole(/img/i)).toHaveAttribute('src');
  });
});
