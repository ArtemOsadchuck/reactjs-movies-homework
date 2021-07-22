import React from 'react';
import { render } from '@testing-library/react';

import Header from '../Header';

import RouterWrapper from '../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../__testsUtils__/storeHoc';

const getComponent = () => (
  <StoreWrapper>
    <RouterWrapper url={'/'}>
      <Header />
    </RouterWrapper>
  </StoreWrapper>
);

describe('Header', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(getComponent());
    const fragment = asFragment();

    expect(fragment).toMatchSnapshot();
  });
});
