import React from 'react';
import { render } from '@testing-library/react';

import FormMui from '../FormMui';

import RouterWrapper from '../../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../../__testsUtils__/storeHoc';
import { IFormMui } from '../types';

const getComponent = (props: IFormMui) => (
  <StoreWrapper>
    <RouterWrapper url="/?search=q&page=1">
      <FormMui {...props} />
    </RouterWrapper>
  </StoreWrapper>
);

describe('FormMui', () => {
  it('should renders correctly', () => {
    const formProps = {
      placeholder: 'movie',
      id: '33641',
      blurOnSelect: true,
      clearOnBlur: false,
      noOptionsText: 'no options',
      clearOnEscape: false,
      forcePopupIcon: false,
      delayOfSearch: 1,
      pageAfterSearch: '1',
    };

    const { asFragment } = render(getComponent(formProps));
    const fragment = asFragment();

    expect(fragment).toMatchSnapshot();
  });
});
