import React from 'react';
import { screen, render } from '@testing-library/react';

import TopBilledCast, { ITopBilledCastProp } from '../TopBilledCast';
import TopBilledCastMocks from '../mocks';

import StoreWrapper from '../../../../__testsUtils__/storeHoc';
import RouterWrapper from '../../../../__testsUtils__/routerHoc';

const getComponent = (props: ITopBilledCastProp) => (
  <StoreWrapper>
    <RouterWrapper url="/movie-details">
      <TopBilledCast props={props} />
    </RouterWrapper>
  </StoreWrapper>
);

describe('TopBilledCast', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(getComponent(TopBilledCastMocks));
    const fragment = asFragment();
    const castLink = screen.getByRole(/link/i).id;

    expect(fragment).toMatchSnapshot();
    expect(castLink).toEqual('192');
  });
});
