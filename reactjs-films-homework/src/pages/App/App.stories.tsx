import React from 'react';

import { Story } from '@storybook/react';
import App from './App';

const Template: Story<typeof App> = () => <App />;

export const FirstStory = Template.bind({});

export default {
  title: 'App',
  component: App,
};
