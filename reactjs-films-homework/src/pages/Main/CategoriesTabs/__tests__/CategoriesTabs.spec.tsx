import React from 'react';
import { render } from '@testing-library/react';

import CategoriesTabs from '../CategoriesTabs';

import StoreWrapper from '../../../../__testsUtils__/storeHoc';
import RouterWrapper from '../../../../__testsUtils__/routerHoc';

const getComponent = () => (
  <StoreWrapper>
    <RouterWrapper url="/">
      <CategoriesTabs />
    </RouterWrapper>
  </StoreWrapper>
);

describe('CategoriesTabs', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(getComponent());
    const fragment = asFragment();

    expect(fragment).toMatchSnapshot();
  });
});
