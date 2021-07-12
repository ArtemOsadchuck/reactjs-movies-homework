import React from 'react';
import { Story } from '@storybook/react';

import Header from './Header';

import { Provider } from 'react-redux';
import store from '../../store/store';

const Template: Story<typeof Header> = () => (
  <Provider store={store}>
    <Header />
  </Provider>
);

export const HeaderStory = Template.bind({});
export default {
  title: 'Header',
  component: Header,
};
