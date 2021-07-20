import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import ActorTitleInfo, { IActorTitleProps } from '../ActorTitleInfo';
import ActorTitleInfoMocks from '../mocks';

import StoreWrapper from '../../../../__testsUtils__/storeHoc';

const renderComponent = (propsToTestedComponent: IActorTitleProps) => {
  const { asFragment } = render(
    <StoreWrapper>
      <ActorTitleInfo actorInfo={propsToTestedComponent} />
    </StoreWrapper>
  );
  return asFragment();
};

describe('ActorTitleInfo', () => {
  it('should renders correctly', () => {
    const fragment = renderComponent(ActorTitleInfoMocks);
    const date = screen.getByText(/1937-06-01/i);

    expect(fragment).toMatchSnapshot();
    expect(date).toBeInTheDocument();
  });

  cleanup();
});
