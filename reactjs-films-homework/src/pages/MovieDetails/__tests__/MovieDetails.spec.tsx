import React from 'react';
import { render } from '@testing-library/react';

import MovieDetails from '../MovieDetails';

import RouterWrapper from '../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../__testsUtils__/storeHoc';

const getComponent = () => (
  <StoreWrapper>
    <RouterWrapper url="/movie-details/?id=192">
      <MovieDetails />
    </RouterWrapper>
  </StoreWrapper>
);

describe('MovieDetails', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(getComponent());
    const fragment = asFragment();

    expect(fragment).toMatchSnapshot();
  });
});
