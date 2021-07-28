import React from 'react';
import { render, screen } from '@testing-library/react';

import ImagesBlock, { IImagesBlock } from '../ImagesBlock';
import ImagesBlockMocks from '../mocks';

import RouterWrapper from '../../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../../__testsUtils__/storeHoc';

const getComponent = (props?: Partial<IImagesBlock>) => (
  <StoreWrapper>
    <RouterWrapper url="/">
      <ImagesBlock title="images" images={ImagesBlockMocks} {...props} />
    </RouterWrapper>
  </StoreWrapper>
);

describe('ImagesBlock', () => {
  it('should renders correctly', () => {
    const props = {
      title: 'images',
      imagesQuality: 8,
      imgWidth: '172px',
    };
    const { asFragment } = render(getComponent(props));
    const fragment = asFragment();
    const imgLength = screen.getAllByRole('img').length;

    expect(fragment).toMatchSnapshot();
    expect(imgLength).toEqual(2);
  });
});
