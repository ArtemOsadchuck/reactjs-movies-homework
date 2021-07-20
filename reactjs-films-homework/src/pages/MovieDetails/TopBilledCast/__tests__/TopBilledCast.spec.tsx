import React from 'react';
import { screen, cleanup, render } from '@testing-library/react';

import TopBilledCast, { ITopBilledCastProp } from '../TopBilledCast';
import TopBilledCastMocks from '../mocks';

import StoreWrapper from '../../../../__testsUtils__/storeHoc';
import RouterWrapper from '../../../../__testsUtils__/routerHoc';

const renderComponent = (propsToTestedComponent: ITopBilledCastProp) => {
  const urlApp = '/movie-details';
  const { asFragment } = render(
    <StoreWrapper>
      <RouterWrapper url={urlApp}>
        <TopBilledCast props={propsToTestedComponent} />
      </RouterWrapper>
    </StoreWrapper>
  );
  return asFragment();
};

describe('TopBilledCast', () => {
  it('should renders correctly', () => {
    const fragment = renderComponent(TopBilledCastMocks);
    const castLink = screen.getByRole(/link/i).id;

    expect(fragment).toMatchSnapshot();
    expect(castLink).toEqual('192');
  });

  cleanup();
});
