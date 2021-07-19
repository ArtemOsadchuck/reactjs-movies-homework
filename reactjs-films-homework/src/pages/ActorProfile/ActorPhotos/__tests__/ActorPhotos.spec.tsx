import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import ActorPhotos from '../ActorPhotos';

import { Provider } from 'react-redux';
import store from '../../../../store/store';
import ActorPhotosMocks from '../mocks';

describe('ActorPhotos', () => {
  let Fragment: any;
  beforeEach(() => {
    const { asFragment } = render(
      <Provider store={store}>
        <ActorPhotos
          photos={ActorPhotosMocks}
          nameAltImg={'imgAlt'}
          photosLength={2}
        />
      </Provider>
    );
    Fragment = asFragment();
  });

  afterEach(() => cleanup());

  it('should renders correctly', () => {
    expect(Fragment).toMatchSnapshot();
  });

  it('must include attr alt, and class photosTitle', () => {
    const imgTag = screen.getAllByRole('img')[0];
    const heading = screen.getByRole('heading');

    expect(imgTag).toHaveAttribute('alt');
    expect(heading).toHaveClass('photosTitle');
  });
});
