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
      <TopBilledCast
        character={TopBilledCastMocks.character}
        id={TopBilledCastMocks.id}
        name={TopBilledCastMocks.name}
        profile_path={TopBilledCastMocks.profile_path}
        popularity={TopBilledCastMocks.popularity}
      />
    </RouterWrapper>
  </StoreWrapper>
);

export const TopBilledCastStory = TemplateUrl.bind({});
