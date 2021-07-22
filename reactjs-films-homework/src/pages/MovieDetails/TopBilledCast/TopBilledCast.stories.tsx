import React from 'react';
import { Story } from '@storybook/react';

import TopBilledCast from './TopBilledCast';
import TopBilledCastMocks from './mocks';

import RouterWrapper from '../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../__testsUtils__/storeHoc';

export default {
  title: 'TopBilledCast',
  component: TopBilledCast,
};

const TemplateUrl: Story<typeof TopBilledCast> = () => (
  <StoreWrapper>
    <RouterWrapper url="/">
      <TopBilledCast props={TopBilledCastMocks} />
    </RouterWrapper>
  </StoreWrapper>
);

export const TopBilledCastStory = TemplateUrl.bind({});
