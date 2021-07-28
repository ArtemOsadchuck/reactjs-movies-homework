import React from 'react';
import { render } from '@testing-library/react';

import ActorProfile from '../ActorProfile';

import RouterWrapper from '../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../__testsUtils__/storeHoc';

const getComponent = () => (
  <StoreWrapper>
    <RouterWrapper url="/actor-profile/?actor-id=1245">
      <ActorProfile />
    </RouterWrapper>
  </StoreWrapper>
);

describe('ActorProfile', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(getComponent());
    const fragment = asFragment();

    expect(fragment).toMatchSnapshot();
  });
});
