import React from 'react';
import { render } from '@testing-library/react';

import Main from '../Main';

import RouterWrapper from '../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../__testsUtils__/storeHoc';

const getComponent = () => (
  <StoreWrapper>
    <RouterWrapper url="/">
      <Main />
    </RouterWrapper>
  </StoreWrapper>
);

describe('Main', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(getComponent());
    const fragment = asFragment();

    expect(fragment).toMatchSnapshot();
  });
});
