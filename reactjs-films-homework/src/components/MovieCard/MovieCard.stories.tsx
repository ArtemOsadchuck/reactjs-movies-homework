import React from 'react';
import { Story } from '@storybook/react';

import MovieCard from './MovieCard';

import { Provider } from 'react-redux';
import store from '../../store/store';
import MovieCardMocks from './mocks';

const MovieCardMocksWithoutImg = {
  ...MovieCardMocks,
  poster_path: '',
};

const TemplateUrl: Story<typeof MovieCard> = () => (
  <Provider store={store}>
    <MovieCard props={MovieCardMocks} />
  </Provider>
);
const Template: Story<typeof MovieCard> = () => (
  <Provider store={store}>
    <MovieCard props={MovieCardMocksWithoutImg} />
  </Provider>
);

export const MovieCardImg = TemplateUrl.bind({});
export const MovieCardMocksWithoutImgUrl = Template.bind({});

export default {
  title: 'MovieCard',
  component: MovieCard,
};
