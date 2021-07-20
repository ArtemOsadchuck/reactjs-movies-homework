import React from 'react';
import { cleanup, render } from '@testing-library/react';

import App from '../App';

import RouterWrapper from '../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../__testsUtils__/storeHoc';

const renderComponent = () => {
  const urlApp = '/movie-details';
  const { asFragment } = render(
    <StoreWrapper>
      <RouterWrapper url={urlApp}>
        <App />
      </RouterWrapper>
    </StoreWrapper>
  );
  return asFragment();
};

describe('App', () => {
  it('should renders correctly', () => {
    const fragment = renderComponent();

    expect(fragment).toMatchSnapshot();
  });

  cleanup();
});
