import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Form from '../Form';
import { Provider } from 'react-redux';
import store from '../../../../store/store';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

describe('Form', () => {
  let fragment: any;
  const history = createMemoryHistory();
  history.push('/');

  beforeEach(() => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router history={history}>
          <Form placeholder="Movies" />
        </Router>
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
