import React from 'react';

import { Story } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
};

const Template: Story<typeof Header> = () => <Header />;

export const HeaderStory = Template.bind({});
