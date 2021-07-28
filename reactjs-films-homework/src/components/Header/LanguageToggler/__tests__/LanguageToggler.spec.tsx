import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';

import LanguageToggler from '../LanguageToggler';

import StoreWrapper from '../../../../__testsUtils__/storeHoc';
import RouterWrapper from '../../../../__testsUtils__/routerHoc';

const getComponent = () => (
  <StoreWrapper>
    <RouterWrapper url="/">
      <LanguageToggler />
    </RouterWrapper>
  </StoreWrapper>
);

describe('LanguageToggler', () => {
  let fragment: any;

  beforeEach(() => {
    const { asFragment } = render(getComponent());

    fragment = asFragment();
  });
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
