import React from 'react';
import { render } from '@testing-library/react';

import Form from '../Form';

import RouterWrapper from '../../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../../__testsUtils__/storeHoc';

const getComponent = (placeholder: string) => (
  <StoreWrapper>
    <RouterWrapper url="/">
      <Form placeholder={placeholder} />
    </RouterWrapper>
  </StoreWrapper>
);

describe('Form', () => {
  it('should renders correctly', () => {
    const placeholder = 'Movies';
    const { asFragment } = render(getComponent(placeholder));
    const fragment = asFragment();

    expect(fragment).toMatchSnapshot();
  });
});
