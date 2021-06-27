import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CategoriesTabs from '../CategoriesTabs';
import { Provider } from 'react-redux';
import store from '../../../../store/store';
describe('CategoriesTabs', () => {
  cleanup();

  it('CategoriesTabs snapshot', () => {
    const asFragment = render(
      <Provider store={store}>
        <CategoriesTabs />
      </Provider>
    );
    expect(asFragment).toMatchSnapshot();
    cleanup();
  });
});
