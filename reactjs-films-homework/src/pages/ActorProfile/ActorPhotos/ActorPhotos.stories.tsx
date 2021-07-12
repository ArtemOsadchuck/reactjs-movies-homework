import React from 'react';
import { Story } from '@storybook/react';

import ActorPhotos from './ActorPhotos';
import ActorPhotosMocks from './mocks';

import { Provider } from 'react-redux';
import store from '../../../store/store';

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
