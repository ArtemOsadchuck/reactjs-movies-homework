import React from 'react';
import { render, cleanup } from '@testing-library/react';

import MovieDetails from '../MovieDetails';

import RouterWrapper from '../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../__testsUtils__/storeHoc';

const renderComponent = () => {
  const urlApp = '/movie-details';
  const { asFragment } = render(
    <StoreWrapper>
      <RouterWrapper url={urlApp}>
        <MovieDetails />
      </RouterWrapper>
    </StoreWrapper>
  );
  return asFragment();
};

describe('MovieDetails', () => {
  it('should renders correctly', () => {
    const fragment = renderComponent();

    expect(fragment).toMatchSnapshot();
  });

  cleanup();
});
