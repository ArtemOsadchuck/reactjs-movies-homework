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
        <ActorPhotos photos={ActorPhotosMocks} photosLength={2} />
      </Provider>
    );
    Fragment = asFragment();
  });

  afterEach(() => {
    cleanup();
  });

  it('ActorPhotos snapshot', () => {
    expect(Fragment).toMatchSnapshot();
  });

  it('ActorPhotos IMG Must include attr alt', () => {
    expect(screen.getAllByRole('img')[0]).toHaveAttribute('alt');
  });

  it('ActorPhotos heading include class photosTitle', () => {
    expect(screen.getByRole('heading')).toHaveClass('photosTitle');
  });
});
