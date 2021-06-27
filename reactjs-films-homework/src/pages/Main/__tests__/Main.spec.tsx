import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Main from '../Main';

describe('Main', () => {
  afterEach(() => {
    cleanup();
  });

  it('Main snapshot', () => {
    const { container } = render(<Main />);
    expect(container).toMatchSnapshot();
  });

  it('Main Must have classes:', () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toHaveClass('mainWrapper');
    expect(container.firstChild.childNodes[0]).toHaveClass('categoriesWrapper');
    expect(container.firstChild.childNodes[1]).toHaveClass('cardsWrapper');
    expect(container.firstChild.childNodes[2]).toHaveClass('paginationWrapper');
  });
  it('Main heading must include text Loading...', () => {
    render(<Main />);
    expect(screen.getByRole('heading')).toHaveTextContent('Loading...');
  });
  it('Main Pagination must include class active', () => {
    render(<Main />);
    expect(screen.getByText(/1/i)).toHaveClass('active');
  });
  it('Main  must include inner text', () => {
    render(<Main />);
    expect(screen.getAllByText(/Popular|Top|rated|Upcoming/i)).toBeDefined();
  });
});
