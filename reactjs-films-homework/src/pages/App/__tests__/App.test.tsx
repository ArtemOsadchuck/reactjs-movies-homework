import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../../../store/store';

test('App test', () => {
  const asFragment = render(
    <Provider store={store}>
      <App />
    </Provider>
  ); //   screen.debug();
  expect(asFragment).toMatchSnapshot();
});
