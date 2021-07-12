import React from 'react';
import { Story } from '@storybook/react';

import TopBilledCast from './TopBilledCast';

import { Provider } from 'react-redux';
import store from '../../../store/store';

export default {
  title: 'TopBilledCast',
  component: TopBilledCast,
};

const Mocks = {
  adult: false,
  gender: 2,
  id: 504,
  known_for_department: 'Acting',
  name: 'Tim Robbins',
  original_name: 'Tim Robbins',
  popularity: 5.305,
  profile_path: '/hsCu1JUzQQ4pl7uFxAVFLOs9yHh.jpg',
  cast_id: 3,
  character: 'Andy Dufresne',
  credit_id: '52fe4231c3a36847f800b131',
  order: 0,
};

const TemplateUrl: Story<typeof TopBilledCast> = () => (
  <Provider store={store}>
    <TopBilledCast props={Mocks} />
  </Provider>
);

export const TopBilledCastStory = TemplateUrl.bind({});
