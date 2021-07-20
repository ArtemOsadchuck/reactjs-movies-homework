import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import Header from '../Header';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import RouterWrapper from '../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../__testsUtils__/storeHoc';

const renderComponent = () => {
  const urlApp = '/';
  const { asFragment } = render(
    <StoreWrapper>
      <RouterWrapper url={urlApp}>
        <Header />
      </RouterWrapper>
    </StoreWrapper>
  );
  return asFragment();
};

describe('Header', () => {
  it('should renders correctly', () => {
    const fragment = renderComponent();

    expect(fragment).toMatchSnapshot();
  });

  cleanup();
});
