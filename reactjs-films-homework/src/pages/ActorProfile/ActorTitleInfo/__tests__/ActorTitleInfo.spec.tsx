import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import ActorTitleInfo from '../ActorTitleInfo';
import ActorTitleInfoMocks from '../mocks';

import { Provider } from 'react-redux';
import store from '../../../../store/store';

describe('ActorTitleInfo', () => {
  let fragment: any;

  beforeEach(() => {
    const { asFragment } = render(
      <Provider store={store}>
        (<ActorTitleInfo actorInfo={ActorTitleInfoMocks} />
      </Provider>
    );
    fragment = asFragment();
  });

  afterEach(() => cleanup());

  it('should renders correctly', () => {
    expect(fragment).toMatchSnapshot();
  });

  it('ActorTitleInfo IMG Must include attr alt', () => {
    expect(screen.getByRole('img')).toHaveAttribute('alt');
  });

  it('ActorTitleInfo article include class titleInfoWrapper', () => {
    expect(screen.getByRole('article')).toHaveClass('titleInfoWrapper');
  });

  it('ActorTitleInfo heading must include text Morgan Freeman', () => {
    expect(screen.getByRole('heading')).toHaveTextContent('Morgan Freeman');
  });

  it('ActorTitleInfo Biography include class biographyTitle', () => {
    expect(screen.getByText(/Biography/i)).toHaveClass('biographyTitle');
  });
});
