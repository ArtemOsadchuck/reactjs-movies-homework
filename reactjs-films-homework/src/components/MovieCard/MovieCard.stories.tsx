import React from 'react';
import { Story } from '@storybook/react';

import MovieCard from './MovieCard';

import MovieCardMocks from './mocks';
import RouterWrapper from '../../__testsUtils__/routerHoc';
import StoreWrapper from '../../__testsUtils__/storeHoc';

const MovieCardMocksWithoutImg = {
  ...MovieCardMocks,
  poster_path: '',
};

const TemplateUrl: Story<typeof MovieCard> = () => (
  <StoreWrapper>
    <RouterWrapper url="/">
      <MovieCard props={MovieCardMocks} />
    </RouterWrapper>
  </StoreWrapper>
);
const Template: Story<typeof MovieCard> = () => (
  <StoreWrapper>
    <RouterWrapper url="/">
      <MovieCard props={MovieCardMocksWithoutImg} />
    </RouterWrapper>
  </StoreWrapper>
);

export const MovieCardImg = TemplateUrl.bind({});
export const MovieCardMocksWithoutImgUrl = Template.bind({});

export default {
  title: 'MovieCard',
  component: MovieCard,
};
