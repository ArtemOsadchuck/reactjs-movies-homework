import React from 'react';

import { Story } from '@storybook/react';
import MovieCard from './MovieCard';

export default {
  title: 'MovieCard',
  component: MovieCard,
};

const MovieCardMocks = {
  adult: false,
  backdrop_path: '/gNBCvtYyGPbjPCT1k3MvJuNuXR6.jpg',
  genre_ids: [35, 18, 10749],
  id: 19404,
  original_language: 'hi',
  original_title: 'दिलवाले दुल्हनिया ले जायेंगे',
  overview:
    'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
  popularity: 16.457,
  poster_path: '/2CAL2433ZeIihfX1Hb2139CX0pW.jpg',
  release_date: '1995-10-20',
  title: 'Dilwale Dulhania Le Jayenge',
  video: false,
  vote_average: 8.7,
  vote_count: 2932,
};
const MovieCardMocksWithoutImg = {
  adult: false,
  backdrop_path: '/gNBCvtYyGPbjPCuNuXR6.jpg',
  genre_ids: [35, 18, 10749],
  id: 19404,
  original_language: 'hi',
  original_title: 'दिलवाले दुल्हनिया ले जायेंगे',
  overview:
    'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
  popularity: 16.457,
  poster_path: '',
  release_date: '1995-10-20',
  title: 'Dilwale Dulhania Le Jayenge',
  video: false,
  vote_average: 8.7,
  vote_count: 2932,
};

const TemplateUrl: Story<typeof MovieCard> = () => (
  <MovieCard props={MovieCardMocks} />
);
const Template: Story<typeof MovieCard> = () => (
  <MovieCard props={MovieCardMocksWithoutImg} />
);

export const MovieCardImg = TemplateUrl.bind({});
export const MovieCardMocksWithoutImgUrl = Template.bind({});
