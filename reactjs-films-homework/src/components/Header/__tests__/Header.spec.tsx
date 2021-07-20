import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Header from '../Header';

import RouterWrapper from '../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../__testsUtils__/storeHoc';

const renderComponent = () => {
  const urlApp = '/';
  const { asFragment } = render(
    <StoreWrapper>
      <RouterWrapper url={urlApp}>
        <Header />
      </RouterWrapper>
    </StoreWrapper>
  );
  return asFragment();
};

describe('Header', () => {
  it('should renders correctly', () => {
    const fragment = renderComponent();

    expect(fragment).toMatchSnapshot();
  });

  cleanup();
});
