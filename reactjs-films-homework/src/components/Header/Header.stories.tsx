import React from 'react';
import { Story } from '@storybook/react';

import Header from './Header';

import RouterWrapper from '../../__testsUtils__/routerHoc';
import StoreWrapper from '../../__testsUtils__/storeHoc';

const Template: Story<typeof Header> = () => (
  <StoreWrapper>
    <RouterWrapper url="/">
      <Header />
    </RouterWrapper>
  </StoreWrapper>
);

export const HeaderStory = Template.bind({});
export default {
  title: 'Header',
  component: Header,
};
