import React from 'react';
import { Meta, Story } from '@storybook/react';

import ActorPhotos, { IActorPhotos } from './ActorPhotos';
import ActorPhotosMocks from './mocks';

import { Provider } from 'react-redux';
import store from '../../../store/store';

const Template: Story<IActorPhotos> = (args) => {
  return (
    <Provider store={store}>
      <ActorPhotos photos={ActorPhotosMocks} photosLength={4} {...args} />
    </Provider>
  );
};

export const ActorPhotosGrig = Template.bind({});
ActorPhotosGrig.args = {
  photos: ActorPhotosMocks,
  photosLength: 4,
};

export default {
  title: 'ActorPhotos',
  component: ActorPhotos,
  argTypes: {
    photos: ActorPhotosMocks,
    photosLength: {
      control: { type: 'number' },
    },
  },
} as Meta;
