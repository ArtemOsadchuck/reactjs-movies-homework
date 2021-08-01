import React from 'react';
import { render } from '@testing-library/react';

import Form from '../FormMui';

import RouterWrapper from '../../../../__testsUtils__/routerHoc';
import StoreWrapper from '../../../../__testsUtils__/storeHoc';
import { IFormMui } from '../types';

const getComponent = ({
  placeholder,
  forcePopupIcon,
  id,
  blurOnSelect,
  clearOnBlur,
  noOptionsText,
  clearOnEscape,
}: IFormMui) => (
  <StoreWrapper>
    <RouterWrapper url="/?search=q&page=1">
      <Form
        placeholder={placeholder}
        id="33641"
        blurOnSelect={true}
        clearOnBlur={false}
        noOptionsText={noOptionsText}
        clearOnEscape={false}
        forcePopupIcon={false}
      />
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
    };

    const { asFragment } = render(getComponent(formProps));
    const fragment = asFragment();

    expect(fragment).toMatchSnapshot();
  });
});
