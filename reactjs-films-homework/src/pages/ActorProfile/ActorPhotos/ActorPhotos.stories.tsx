import React from 'react';

import { Story } from '@storybook/react';
import ActorPhotos from './ActorPhotos';

import { Provider } from 'react-redux';
import store from '../../../store/store';

const ActorPhotosMocks = [
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/oIciQWr8VwKoR8TmAw1owaiZFyb.jpg',
    height: 750,
    iso_639_1: null,
    vote_average: 5.522,
    vote_count: 4,
    width: 500,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/1ahENoyEgKSbRUd0IsydIff7rt1.jpg',
    height: 3000,
    iso_639_1: null,
    vote_average: 5.318,
    vote_count: 3,
    width: 2000,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/20DXKyUQoL38SYoSW3JkHkZkkVP.jpg',
    height: 1500,
    iso_639_1: null,
    vote_average: 5.312,
    vote_count: 1,
    width: 1000,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/g2n87hnxD0w2suSBMv0BMoB4gef.jpg',
    height: 1920,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 1280,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/jSBy7nfRxr8zgBZ7ysFEPO7gqKD.jpg',
    height: 1920,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 1280,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/6zrburasB0CTZmr2cYRmxibCslZ.jpg',
    height: 1920,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 1280,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/lKORNoSPdNH9BvvJqQp9Nu7gTw9.jpg',
    height: 1920,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 1280,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/gemw7fSh2WIqfaOXVlubSiqcI75.jpg',
    height: 1920,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 1280,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/b1BHmOAxMMB7KRIZZauwZb1AFtz.jpg',
    height: 1920,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 1280,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/f9yXuNanZtWCBfhh4Kfh84yoY6G.jpg',
    height: 1920,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 1280,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/5dgYqJR2CH8KV8EtWrs7GquQ4wc.jpg',
    height: 1920,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 1280,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/bx6NAR6XglMEUddQWorWXva3Kyc.jpg',
    height: 2400,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 1600,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/mZSqy8yRO7xHtne9aM7YO6cFNGk.jpg',
    height: 1920,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 1280,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/jPsLqiYGSofU4s6BjrxnefMfabb.jpg',
    height: 2700,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 1800,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/905k0RFzH0Kd6gx8oSxRdnr6FL.jpg',
    height: 3000,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 2000,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/1IJitSMAQjgi6FOvuPptMyHmYCJ.jpg',
    height: 1920,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 1280,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/ttkWK0DgBkL7FEMS396HMAt1l0F.jpg',
    height: 3000,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 2000,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/nhFqNPXDyWTRzHqIUqwayfvDmCn.jpg',
    height: 1920,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 1280,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/iuX6R4Sfm6FK5nbfSQ8OgvWcOjy.jpg',
    height: 1920,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 1280,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/8A16mBjMxfM3UFb7EHstl8bEkqH.jpg',
    height: 3000,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 2000,
  },
  {
    aspect_ratio: 0.6666666666666666,
    file_path: '/iRl1tJADZhnkTcirVm21zs8kJhH.jpg',
    height: 999,
    iso_639_1: null,
    vote_average: 0,
    vote_count: 0,
    width: 666,
  },
];

const photosLength = 4;

const Template: Story<typeof ActorPhotos> = () => (
  <Provider store={store}>
    <ActorPhotos photos={ActorPhotosMocks} photosLength={photosLength} />
  </Provider>
);

export const ActorPhotosGrig = Template.bind({});

export default {
  title: 'ActorPhotos',
  component: ActorPhotos,
  photosLength: { options: 4, control: 15 },
};
