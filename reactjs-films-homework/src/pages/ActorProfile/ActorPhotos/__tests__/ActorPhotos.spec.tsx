import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import ActorPhotos from '../ActorPhotos';

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

  it('ActorPhotos snapshot', () => {
    const { asFragment } = render(
      <ActorPhotos props={mockProps} photosLength={2} />
    );
    expect(asFragment).toMatchSnapshot();
  });

  it('ActorPhotos Must have class PhotosWrapper', () => {
    const { container } = render(
      <ActorPhotos props={mockProps} photosLength={2} />
    );
    expect(container.firstChild).toHaveClass('PhotosWrapper');
  });
  it('ActorPhotos IMG Must include attr alt', () => {
    render(<ActorPhotos props={mockProps} photosLength={2} />);
    expect(screen.getAllByRole('img')[0]).toHaveAttribute('alt');
  });
  it('ActorPhotos heading include class photosTitle', () => {
    render(<ActorPhotos props={mockProps} photosLength={2} />);
    expect(screen.getByRole('heading')).toHaveClass('photosTitle');
  });
});
