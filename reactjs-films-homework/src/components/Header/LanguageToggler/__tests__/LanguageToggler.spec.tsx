import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';

import LanguageToggler from '../LanguageToggler';

import { Provider } from 'react-redux';
import store from '../../../../store/store';

describe('LanguageToggler', () => {
  let Fragment: any;

  beforeEach(() => {
    const { asFragment } = render(
      <Provider store={store}>
        <LanguageToggler />
      </Provider>
    );
    Fragment = asFragment();
  });

  afterEach(() => {
    cleanup();
  });

  it('Snapshot', () => {
    expect(Fragment).toMatchSnapshot();
  });

  it('Must include text RU or EN', () => {
    expect(screen.getByText(/en|ru/i)).not.toBeNull();
  });

  it('Must be clickable', () => {
    fireEvent.click(screen.getByText(/en|ru/i));
    fireEvent.click(screen.getByText(/ru/i), {
      target: <div>RU</div>,
    });
    expect(screen.getByText(/ru/i)).toBeInTheDocument();
  });
});
