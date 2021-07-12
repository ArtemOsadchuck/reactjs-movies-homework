import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ActorProfile from '../ActorProfile';

describe('ActorProfile', () => {
  afterEach(() => {
    cleanup();
  });

  it('ActorProfile snapshot', () => {
    const { asFragment } = render(<ActorProfile />);
    expect(asFragment).toMatchSnapshot();
  });
  it('ActorProfile Must have classes  mainWrapper, cardsWrapper, PhotosWrapper', () => {
    const { container } = render(<ActorProfile />);
    expect(container.firstChild).toHaveClass('mainWrapper');
    expect(container.firstChild!.childNodes[1]).toHaveClass('cardsWrapper');
    expect(container.firstChild!.childNodes[0]).toHaveClass('PhotosWrapper');
  });
});
