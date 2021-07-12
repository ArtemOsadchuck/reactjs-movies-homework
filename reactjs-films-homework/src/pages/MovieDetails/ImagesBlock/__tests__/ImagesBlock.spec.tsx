import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ImagesBlock from '../ImagesBlock';
import { Provider } from 'react-redux';
import store from '../../../../store/store';

describe('ImagesBlock', () => {
  const mockProps = [
    {
      aspect_ratio: 1.777777777777778,
      file_path: '/irlfhYtHfhZuYpsq2LAoh308NFe.jpg',
      height: 1080,
      iso_639_1: null,
      vote_average: 5.384,
      vote_count: 2,
      width: 1920,
    },
    {
      aspect_ratio: 1.777777777777778,
      file_path: '/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg',
      height: 1080,
      iso_639_1: null,
      vote_average: 5.326,
      vote_count: 7,
      width: 1920,
    },
  ];
  const title = 'images';

  let Fragment: any;

  beforeEach(() => {
    const { asFragment } = render(
      <Provider store={store}>
        <ImagesBlock props={mockProps} title={title} />
      </Provider>
    );
    Fragment = asFragment();
  });

  afterEach(() => cleanup());

  it('Snapshot', () => {
    expect(Fragment).toMatchSnapshot();
  });

  it('Must have class:', () => {
    expect(screen.getByText(/images/i)).toBeInTheDocument();
    expect(screen.getByText(/images/i)).toHaveClass('imagesTitle');
  });

  it('Must heave attribute:', () => {
    screen.getAllByRole('img').forEach((el) => {
      expect(el).toHaveAttribute('src');
      expect(el).toHaveAttribute('alt');
      expect(el).toHaveAttribute('width');
      expect(el).toHaveClass('image');
    });
  });

  it('ImagesBlock Loading... must be in the document:', () => {
    expect(screen.getByText(/Images/i)).toBeInTheDocument();
  });
});
