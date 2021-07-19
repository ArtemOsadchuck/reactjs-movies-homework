import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ActorProfile from '../ActorProfile';

import { Provider } from 'react-redux';
import store from '../../../store/store';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/',
  }),
}));

describe('ActorProfile', () => {
  let fragment: any;

  beforeEach(() => {
    const { asFragment } = render(
      <Provider store={store}>
        <ActorProfile />
      </Provider>
    );
    fragment = asFragment();
  });

  afterEach(() => {
    cleanup();
  });

  it('Snapshot', () => {
    expect(fragment).toMatchSnapshot();
  });

  it('Must have classes mainWrapper, cardsWrapper, PhotosWrapper', () => {
    expect(fragment.firstChild).toHaveClass('mainWrapper');
    expect(fragment.firstChild!.childNodes[1]).toHaveClass('cardsWrapper');
    expect(fragment.firstChild!.childNodes[0]).toHaveClass('photosWrapper');
  });
});
