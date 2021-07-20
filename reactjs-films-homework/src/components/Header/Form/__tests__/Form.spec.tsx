import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Form from '../Form';

import RouterWrapper from '../../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../../__testsUtils__/storeHoc';

const renderComponent = (placeholder: string) => {
  const urlApp = '/';
  const { asFragment } = render(
    <StoreWrapper>
      <RouterWrapper url={urlApp}>
        <Form placeholder="Movies" />
      </RouterWrapper>
    </StoreWrapper>
  );
  return asFragment();
};

describe('Form', () => {
  it('should renders correctly', () => {
    const placeholder = 'Movies';
    const fragment = renderComponent(placeholder);

    expect(fragment).toMatchSnapshot();
  });

  cleanup();
});
