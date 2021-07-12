import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import ImagesBlock from '../ImagesBlock';
import ImagesBlockMocks from '../mocks';

import { Provider } from 'react-redux';
import store from '../../../../store/store';

describe('ImagesBlock', () => {
  const title = 'images';
  const imagesQuality = 8;
  const imgWidth = '172px';
  let Fragment: any;

  beforeEach(() => {
    const { asFragment } = render(
      <Provider store={store}>
        <ImagesBlock
          images={ImagesBlockMocks}
          title={title}
          imgWidth={imgWidth}
          imagesQuality={imagesQuality}
        />
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
