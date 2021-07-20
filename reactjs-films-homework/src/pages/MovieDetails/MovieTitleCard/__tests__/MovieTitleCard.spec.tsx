import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import MovieTitleCard, { ITitleMovieProps } from '../MovieTitleCard';
import MovieTitleCardMocks from '../mocks';

import RouterWrapper from '../../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../../__testsUtils__/storeHoc';

const renderComponent = (propsToTestedComponent: ITitleMovieProps) => {
  const urlApp = '/movie-details';
  const { asFragment } = render(
    <StoreWrapper>
      <RouterWrapper url={urlApp}>
        <MovieTitleCard props={propsToTestedComponent} />
      </RouterWrapper>
    </StoreWrapper>
  );
  return asFragment();
};

describe('MovieTitleCard', () => {
  it('should renders correctly', () => {
    const fragment = renderComponent(MovieTitleCardMocks);
    const date = screen.getByText(/1994-09-23/i);
    const revenue = screen.getByText(/28 341 469/i);

    expect(fragment).toMatchSnapshot();

    expect(date).toBeInTheDocument();
    expect(revenue).toBeInTheDocument();
  });

  cleanup();
});
