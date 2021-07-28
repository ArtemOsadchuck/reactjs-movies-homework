import React from 'react';
import { render } from '@testing-library/react';

import Pagination from '../Pagination';

import StoreWrapper from '../../../../__testsUtils__/storeHoc';
import RouterWrapper from '../../../../__testsUtils__/routerHoc';

const getComponent = (props: number) => (
  <StoreWrapper>
    <RouterWrapper url="/">
      <Pagination neededPages={props} />
    </RouterWrapper>
  </StoreWrapper>
);

describe('Pagination', () => {
  it('should renders correctly', () => {
    const neededPages = 5;
    const { asFragment } = render(getComponent(neededPages));

    const fragment = asFragment();
    expect(fragment).toMatchSnapshot();
  });
});
