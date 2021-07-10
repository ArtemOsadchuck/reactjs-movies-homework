import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Form from '../Form';
import { Provider } from 'react-redux';
import store from '../../../../store/store';

describe('Form', () => {
  let fragment: any;

  beforeEach(() => {
    const { asFragment } = render(
      <Provider store={store}>
        <Form placeholder="Movies" />
      </Provider>
    );
    fragment = asFragment();
  });

  afterEach(() => {
    cleanup();
  });

  it('Snapshot', () => {
    expect(fragment).toMatchSnapshot();
  });

  it('Should render placeholder', () => {
    expect(screen.getByPlaceholderText(/Movies/i)).toBeInTheDocument();
  });

  it('Must has not default value', () => {
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });
});
