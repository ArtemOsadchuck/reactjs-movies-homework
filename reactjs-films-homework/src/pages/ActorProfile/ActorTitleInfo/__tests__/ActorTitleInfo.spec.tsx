import React from 'react';
import { render, screen } from '@testing-library/react';

import ActorTitleInfo, { IActorTitleProps } from '../ActorTitleInfo';
import ActorTitleInfoMocks from '../mocks';

import StoreWrapper from '../../../../__testsUtils__/storeHoc';

const getComponent = (props: IActorTitleProps) => (
  <StoreWrapper>
    <ActorTitleInfo
      also_known_as={ActorTitleInfoMocks.also_known_as}
      biography={ActorTitleInfoMocks.biography}
      birthday={ActorTitleInfoMocks.birthday}
      gender={ActorTitleInfoMocks.gender}
      id={ActorTitleInfoMocks.id}
      known_for_department={ActorTitleInfoMocks.known_for_department}
      name={ActorTitleInfoMocks.name}
      place_of_birth={ActorTitleInfoMocks.place_of_birth}
      profile_path={ActorTitleInfoMocks.profile_path}
    />
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
