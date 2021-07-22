import React from 'react';
import { render, screen } from '@testing-library/react';

import MovieCard from '../MovieCard';
import MovieCardMocks from '../mocks';

import RouterWrapper from '../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../__testsUtils__/storeHoc';

const getComponent = () => (
  <StoreWrapper>
    <RouterWrapper url={'/'}>
      <MovieCard
        id={MovieCardMocks.id}
        title={MovieCardMocks.title}
        vote_average={MovieCardMocks.vote_average}
        poster_path={MovieCardMocks.poster_path}
      />
    </RouterWrapper>
  </StoreWrapper>
);

describe('MovieCard', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(getComponent());
    const fragment = asFragment();

    expect(fragment).toMatchSnapshot();
    expect(screen.getByText(/[0-9]/i)).toBeInTheDocument();
  });
});
