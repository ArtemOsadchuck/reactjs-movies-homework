import React from 'react';
import { render } from '@testing-library/react';

import MovieTitleInfo, { IMovieTitleInfo } from '../MovieTitleInfo';

import RouterWrapper from '../../../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../../../__testsUtils__/storeHoc';

const getComponent = (props?: Partial<IMovieTitleInfo>) => (
  <StoreWrapper>
    <RouterWrapper url="/">
      <MovieTitleInfo {...props} />
    </RouterWrapper>
  </StoreWrapper>
);

describe('MovieTitleInfo', () => {
  it('should renders correctly', () => {
    const props = {
      heading: 'Overview:',
      infoField:
        'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison',
    };
    const { asFragment } = render(getComponent(props));
    const fragment = asFragment();

    expect(fragment).toMatchSnapshot();
  });
});
