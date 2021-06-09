import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';
import App from './App';

export default {
  title: 'App',
  component: App,
};

const Template: Story<typeof App> = () => <App />;

export const FirstStory = Template.bind({});
