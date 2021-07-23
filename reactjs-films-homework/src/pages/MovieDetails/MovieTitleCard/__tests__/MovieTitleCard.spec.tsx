import React from 'react';
import { render, screen } from '@testing-library/react';

import MovieTitleCard, { ITitleMovieProps } from '../MovieTitleCard';
import MovieTitleCardMocks from '../mocks';

import RouterWrapper from '../../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../../__testsUtils__/storeHoc';

const getComponent = (props: ITitleMovieProps) => (
  <StoreWrapper>
    <RouterWrapper url="/">
      <MovieTitleCard
        title={props.title}
        vote_average={props.vote_average}
        poster_path={props.poster_path}
        overview={props.overview}
        release_date={props.release_date}
        runtime={props.runtime}
        revenue={props.revenue}
        genres={props.genres}
        id={props.id}
      />
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
