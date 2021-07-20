import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Main from '../Main';

import RouterWrapper from '../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../__testsUtils__/storeHoc';

const renderComponent = () => {
  const urlApp = '/';
  const { asFragment } = render(
    <StoreWrapper>
      <RouterWrapper url={urlApp}>
        <Main />
      </RouterWrapper>
    </StoreWrapper>
  );

  return asFragment();
};

describe('Main', () => {
  it('should renders correctly', () => {
    const fragment = renderComponent();

    expect(fragment).toMatchSnapshot();
  });

  cleanup();
});
