import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import ImagesBlock, { IImagesBlock } from '../ImagesBlock';
import ImagesBlockMocks from '../mocks';

import RouterWrapper from '../../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../../__testsUtils__/storeHoc';

const renderComponent = ({
  title,
  images,
  imagesQuality,
  imgWidth,
}: IImagesBlock) => {
  const urlApp = '/movie-details';

  const { asFragment } = render(
    <StoreWrapper>
      <RouterWrapper url={urlApp}>
        <ImagesBlock
          images={images}
          title={title}
          imgWidth={imgWidth}
          imagesQuality={imagesQuality}
        />
      </RouterWrapper>
    </StoreWrapper>
  );
  return asFragment();
};

describe('ImagesBlock', () => {
  it('should renders correctly', () => {
    const imagesBlockData = {
      title: 'images',
      imagesQuality: 8,
      imgWidth: '172px',
      images: ImagesBlockMocks,
    };
    const fragment = renderComponent(imagesBlockData);
    const imgLength = screen.getAllByRole('img').length;

    expect(fragment).toMatchSnapshot();
    expect(imgLength).toEqual(2);
  });

  cleanup();
});
