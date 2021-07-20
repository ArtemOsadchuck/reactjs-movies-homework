import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Pagination from '../Pagination';

import StoreWrapper from '../../../../__testsUtils__/storeHoc';
import RouterWrapper from '../../../../__testsUtils__/routerHoc';

const renderComponent = () => {
  const urlApp = '/';
  const { asFragment } = render(
    <StoreWrapper>
      <RouterWrapper url={urlApp}>
        <Pagination neededPages={5} />
      </RouterWrapper>
    </StoreWrapper>
  );
  return asFragment();
};

describe('Pagination', () => {
  it('should renders correctly', () => {
    const fragment = renderComponent();

    expect(fragment).toMatchSnapshot();
  });
  cleanup();
});
