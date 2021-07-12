import React from 'react';
import { Story } from '@storybook/react';

import TopBilledCast from './TopBilledCast';
import TopBilledCastMocks from './mocks';

import { Provider } from 'react-redux';
import store from '../../../store/store';

export default {
  title: 'TopBilledCast',
  component: TopBilledCast,
};

const TemplateUrl: Story<typeof TopBilledCast> = () => (
  <Provider store={store}>
    <TopBilledCast props={TopBilledCastMocks} />
  </Provider>
);

export const TopBilledCastStory = TemplateUrl.bind({});
