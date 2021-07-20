import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ActorProfile from '../ActorProfile';

import RouterWrapper from '../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../__testsUtils__/storeHoc';

const renderComponent = () => {
  const urlApp = '/actor-profile/?actor-id=1245';
  const { asFragment } = render(
    <StoreWrapper>
      <RouterWrapper url={urlApp}>
        <ActorProfile />
      </RouterWrapper>
    </StoreWrapper>
  );
  return asFragment();
};

describe('ActorProfile', () => {
  it('should renders correctly', () => {
    const fragment = renderComponent();

    expect(fragment).toMatchSnapshot();
  });

  cleanup();
});
