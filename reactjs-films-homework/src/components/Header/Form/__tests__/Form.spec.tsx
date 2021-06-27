import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Form from '../Form';
import { Provider } from 'react-redux';
import store from '../../../../store/store';

describe('Form', () => {
  let Fragment: any;
  beforeEach(() => {
    const asFragment = render(
      <Provider store={store}>
        <Form placeholder="Movies" />
      </Provider>
    );
    Fragment = asFragment;
  });
  afterEach(() => {
    cleanup();
  });

  it('Form snapshot', () => {
    expect(Fragment).toMatchSnapshot();
  });
  it('placeholder text', () => {
    expect(screen.getByPlaceholderText(/Movies/i)).toBeInTheDocument();
  });
  it('Must has not default value', () => {
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });
});
