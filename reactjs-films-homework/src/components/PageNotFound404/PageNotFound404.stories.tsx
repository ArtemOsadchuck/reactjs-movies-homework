import React from 'react';
import { Story } from '@storybook/react';

import PageNotFound404 from './PageNotFound404';
import StoreWrapper from '../../__testsUtils__/storeHoc';
import { timingOfPageNotFound } from '../../constants/variables';

const Template: Story<typeof PageNotFound404> = () => (
  <StoreWrapper>
    <PageNotFound404 timing={timingOfPageNotFound} />
  </StoreWrapper>
);

export const loaderStory = Template.bind({});

export default {
  title: 'PageNotFound404',
  component: PageNotFound404,
};
