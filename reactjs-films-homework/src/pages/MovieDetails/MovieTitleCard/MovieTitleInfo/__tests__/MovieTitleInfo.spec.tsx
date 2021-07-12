import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import MovieTitleInfo from '../MovieTitleInfo';

describe('MovieTitleInfo', () => {
  const mockProps = {
    heading: 'Overview:',
    overview:
      'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison',
  };

  afterEach(() => {
    cleanup();
  });

  it('MovieTitleInfo snapshot', () => {
    const { asFragment } = render(
      <MovieTitleInfo
        heading={mockProps.heading}
        infoField={mockProps.overview}
      />
    );
    expect(asFragment).toMatchSnapshot();
  });

  it('MovieTitleInfo Must have class:', () => {
    const { container } = render(
      <MovieTitleInfo
        heading={mockProps.heading}
        infoField={mockProps.overview}
      />
    );
    expect(container.firstChild).toHaveClass('otherInfoWrapper');
    expect(container.firstChild!.childNodes[0]).toHaveClass('heading');
    expect(container.firstChild!.childNodes[1]).toHaveClass('infoField');
  });
  it('MovieTitleInfo must have text:', () => {
    render(
      <MovieTitleInfo
        heading={mockProps.heading}
        infoField={mockProps.overview}
      />
    );
    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
    expect(screen.getByText(/1940s/i)).toBeInTheDocument();
  });
});
