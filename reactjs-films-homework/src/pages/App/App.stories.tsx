import React from 'react';
import { Story } from '@storybook/react';

import App from './App';

import { Provider } from 'react-redux';
import store from '../../store/store';

const Template: Story<typeof App> = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export const AppStory = Template.bind({});

export default {
  title: 'App',
  component: App,
};
