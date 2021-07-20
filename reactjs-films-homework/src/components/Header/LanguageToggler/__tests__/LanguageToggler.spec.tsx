import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';

import LanguageToggler from '../LanguageToggler';

import StoreWrapper from '../../../../__testsUtils__/storeHoc';

const renderComponent = () => {
  const { asFragment } = render(
    <StoreWrapper>
      <LanguageToggler />
    </StoreWrapper>
  );
  return asFragment();
};

describe('LanguageToggler', () => {
  let fragment: any;
  beforeEach(() => (fragment = renderComponent()));
  afterEach(() => cleanup());

  it('should renders correctly', () => {
    expect(fragment).toMatchSnapshot();
  });

  it('must be clickable', () => {
    const changeLang = () => {
      fireEvent.click(btnStart);

      const btnRU = screen.getByText(/ru/i);

      fireEvent.click(btnRU, {
        target: target,
      });
    };
    const btnStart = screen.getByText(/en|ru/i);
    const target = <div>RU</div>;

    changeLang();

    const btnAfterChange = screen.getByText(/ru/i);

    expect(btnAfterChange).toBeInTheDocument();
  });
});
