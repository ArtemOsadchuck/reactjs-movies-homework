import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import ActorPhotos, { IActorPhotos } from '../ActorPhotos';
import ActorPhotosMocks from '../mocks';

import RouterWrapper from '../../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../../__testsUtils__/storeHoc';

const renderComponent = ({
  photos,
  nameAltImg,
  photosLength,
}: IActorPhotos) => {
  const urlApp = '/movie-details';
  const { asFragment } = render(
    <StoreWrapper>
      <RouterWrapper url={urlApp}>
        <ActorPhotos
          photos={photos}
          nameAltImg={nameAltImg}
          photosLength={photosLength}
        />
      </RouterWrapper>
    </StoreWrapper>
  );
  return asFragment();
};

describe('ActorPhotos', () => {
  it('should renders correctly', () => {
    const mock = {
      nameAltImg: 'altName',
      photosLength: 4,
      photos: ActorPhotosMocks,
    };
    const fragment = renderComponent(mock);
    const imgTag = screen.getAllByRole('img').length;

    expect(fragment).toMatchSnapshot();
    expect(imgTag).toEqual(mock.photosLength);
  });

  cleanup();
});
