import React from 'react';
import { Story } from '@storybook/react';
import Header from './Header';

const Template: Story<typeof Header> = () => <Header />;

export const HeaderStory = Template.bind({});
export default {
  title: 'Header',
  component: Header,
};
