import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ImagesBlock from '../ImagesBlock';

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
  afterEach(() => {
    cleanup();
  });

  it('ImagesBlock snapshot', () => {
    const { asFragment } = render(<ImagesBlock props={mockProps} />);
    expect(asFragment).toMatchSnapshot();
  });

  it('ImagesBlock Must have class:', () => {
    const { container } = render(<ImagesBlock props={mockProps} />);
    expect(container.firstChild).toHaveClass('imagesBlockWrapper');
    expect(container.firstChild!.childNodes[0]).toHaveClass(
      'imagesTitleWrapper'
    );
    expect(container.firstChild!.childNodes[1]).toHaveClass('imagesWrapper');
  });

  it('ImagesBlock must heave attribute:', () => {
    render(<ImagesBlock props={mockProps} />);
    screen.getAllByRole('img').forEach((el) => {
      expect(el).toHaveAttribute('src');
      expect(el).toHaveAttribute('alt');
      expect(el).toHaveAttribute('width');
      expect(el).toHaveClass('image');
    });
  });

  it('ImagesBlock Loading... must be in the document:', () => {
    render(<ImagesBlock props={mockProps} />);
    expect(screen.getByText(/Images/i)).toBeInTheDocument();
  });
});
