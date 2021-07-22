import React from 'react';
import { Story } from '@storybook/react';

import Loader from './Loader';
import StoreWrapper from '../../__testsUtils__/storeHoc';

const Template: Story<typeof Loader> = () => (
  <StoreWrapper>
    <Loader />
  </StoreWrapper>
);

export const loaderStory = Template.bind({});

export default {
  title: 'Loader',
  component: Loader,
};
