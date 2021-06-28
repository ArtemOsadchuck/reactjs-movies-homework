import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import ActorPhotos from '../ActorPhotos';
import { Provider } from 'react-redux';
import store from '../../../../store/store';

describe('ActorPhotos', () => {
  const mockProps = [
    {
      aspect_ratio: 0.6666666666666666,
      file_path: '/oIciQWr8VwKoR8TmAw1owaiZFyb.jpg',
      height: 750,
      iso_639_1: null,
      vote_average: 5.522,
      vote_count: 4,
      width: 500,
    },
    {
      aspect_ratio: 0.6666666666666666,
      file_path: '/1ahENoyEgKSbRUd0IsydIff7rt1.jpg',
      height: 3000,
      iso_639_1: null,
      vote_average: 5.318,
      vote_count: 3,
      width: 2000,
    },
  ];

  afterEach(() => {
    cleanup();
  });

  let Fragment: any;
  beforeEach(() => {
    const asFragment = render(
      <Provider store={store}>
        <ActorPhotos props={mockProps} photosLength={2} />
      </Provider>
    );
    Fragment = asFragment;
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
