import React from 'react';
import { render, screen } from '@testing-library/react';

import MovieTitleCard, { ITitleMovieProps } from '../MovieTitleCard';
import MovieTitleCardMocks from '../mocks';

import RouterWrapper from '../../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../../__testsUtils__/storeHoc';

const getComponent = (props: ITitleMovieProps) => (
  <StoreWrapper>
    <RouterWrapper url="/">
      <MovieTitleCard props={props} />
    </RouterWrapper>
  </StoreWrapper>
);

describe('MovieTitleCard', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(getComponent(MovieTitleCardMocks));
    const fragment = asFragment();
    const date = screen.getByText(/1994-09-23/i);
    const revenue = screen.getByText(/28 341 469/i);

    expect(fragment).toMatchSnapshot();

    expect(date).toBeInTheDocument();
    expect(revenue).toBeInTheDocument();
  });
});
