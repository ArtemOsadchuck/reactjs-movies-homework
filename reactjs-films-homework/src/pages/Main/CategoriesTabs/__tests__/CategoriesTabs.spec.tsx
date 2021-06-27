import React from 'react';
import { cleanup, render } from '@testing-library/react';
import CategoriesTabs from '../CategoriesTabs';

describe('CategoriesTabs', () => {
  afterEach(() => {
    cleanup();
  });

  it('CategoriesTabs snapshot', () => {
    const { asFragment } = render(<CategoriesTabs />);
    expect(asFragment).toMatchSnapshot();
  });
});
