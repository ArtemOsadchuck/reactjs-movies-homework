import React from 'react';
import { render } from '@testing-library/react';

import ActorPhotos, { IActorPhotos } from '../ActorPhotos';
import ActorPhotosMocks from '../mocks';

import RouterWrapper from '../../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../../__testsUtils__/storeHoc';

const getComponent = (props?: Partial<IActorPhotos>) => (
  <StoreWrapper>
    <RouterWrapper url="/">
      <ActorPhotos nameAltImg="name" photos={ActorPhotosMocks} {...props} />
    </RouterWrapper>
  </StoreWrapper>
);

describe('ActorPhotos', () => {
  it('should renders correctly', () => {
    const props = {
      nameAltImg: 'altName',
      photosLength: 4,
    };
    const { asFragment } = render(getComponent(props));
    const fragment = asFragment();

    expect(fragment).toMatchSnapshot();
  });

  it('should renders correctly with another props', () => {
    const props = {
      nameAltImg: 'newAltName',
      photosLength: 6,
    };
    const { container } = render(getComponent(props));
    const fragment = container;
    const imgTagLength = fragment.querySelector('.photosGrid')?.children.length;
    const imgAltName = fragment.querySelectorAll('img')[3].alt;

    expect(imgTagLength).toEqual(props.photosLength);
    expect(imgAltName).toEqual(props.nameAltImg);
  });
});
