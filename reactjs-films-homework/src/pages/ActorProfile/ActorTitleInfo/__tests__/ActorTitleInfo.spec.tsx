import React from 'react';
import { render, screen } from '@testing-library/react';

import ActorTitleInfo, { IActorTitleProps } from '../ActorTitleInfo';
import ActorTitleInfoMocks from '../mocks';

import StoreWrapper from '../../../../__testsUtils__/storeHoc';

const getComponent = (props: IActorTitleProps) => (
  <StoreWrapper>
    <ActorTitleInfo actorInfo={props} />
  </StoreWrapper>
);

describe('ActorTitleInfo', () => {
  it('should renders correctly', () => {
    const { asFragment } = render(getComponent(ActorTitleInfoMocks));
    const fragment = asFragment();

    const date = screen.getByText(/1937-06-01/i);

    expect(fragment).toMatchSnapshot();
    expect(date).toBeInTheDocument();
  });
});
