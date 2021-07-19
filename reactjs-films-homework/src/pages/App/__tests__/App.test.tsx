import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import App from '../App';

import { Provider } from 'react-redux';
import store from '../../../store/store';
import { Router } from 'react-router-dom';

test('App test', () => {
  const history = createMemoryHistory();
  history.push('/');
  const { asFragment } = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
