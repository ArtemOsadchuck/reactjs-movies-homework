import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../../../store/store';

test('App test', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(asFragment()).toMatchSnapshot();
});
