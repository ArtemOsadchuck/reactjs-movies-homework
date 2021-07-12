import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import MovieTitleInfo from '../MovieTitleInfo';
import { Provider } from 'react-redux';
import store from '../../../../../store/store';

describe('MovieTitleInfo', () => {
  const mockProps = {
    heading: 'Overview:',
    overview:
      'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison',
  };

  let fragment: any;

  beforeEach(() => {
    const { asFragment } = render(
      <Provider store={store}>
        <MovieTitleInfo
          heading={mockProps.heading}
          infoField={mockProps.overview}
        />
      </Provider>
    );
    fragment = asFragment();
  });

  afterEach(() => cleanup());

  it('Snapshot', () => {
    expect(fragment).toMatchSnapshot();
  });

  it('Must have class:', () => {
    expect(fragment.firstChild).toHaveClass('otherInfoWrapper');
    expect(fragment.firstChild!.childNodes[0]).toHaveClass('heading');
    expect(fragment.firstChild!.childNodes[1]).toHaveClass('infoField');
  });

  it('Must have text:', () => {
    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/1940s/i)).toBeInTheDocument();
  });
});
