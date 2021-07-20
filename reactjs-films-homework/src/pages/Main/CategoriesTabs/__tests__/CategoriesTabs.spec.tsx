import React from 'react';
import { cleanup, render } from '@testing-library/react';

import CategoriesTabs from '../CategoriesTabs';

import StoreWrapper from '../../../../__testsUtils__/storeHoc';
import RouterWrapper from '../../../../__testsUtils__/routerHoc';

const renderComponent = () => {
  const urlApp = '/';
  const { asFragment } = render(
    <StoreWrapper>
      <RouterWrapper url={urlApp}>
        <CategoriesTabs />
      </RouterWrapper>
    </StoreWrapper>
  );
  return asFragment();
};

describe('CategoriesTabs', () => {
  it('should renders correctly', () => {
    const fragment = renderComponent();

    expect(fragment).toMatchSnapshot();
  });

  cleanup();
});
