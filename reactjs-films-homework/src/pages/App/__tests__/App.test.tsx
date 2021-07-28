import React from 'react';
import { render } from '@testing-library/react';

import App from '../App';

import RouterWrapper from '../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../__testsUtils__/storeHoc';

const getComponent = () => (
  <StoreWrapper>
    <RouterWrapper url="/movie-details">
      <App />
    </RouterWrapper>
  </StoreWrapper>
);

describe('App', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(getComponent());
    const fragment = asFragment();

    expect(fragment).toMatchSnapshot();
  });
});
