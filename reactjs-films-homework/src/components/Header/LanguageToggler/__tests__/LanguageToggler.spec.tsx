import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import LanguageToggler from '../LanguageToggler';

describe('LanguageToggler', () => {
  afterEach(() => {
    cleanup();
  });
  it('LanguageToggler snapshot', () => {
    const { asFragment } = render(<LanguageToggler />);
    expect(asFragment).toMatchSnapshot();
  });

  it('LanguageToggler Must include text RU or EN', () => {
    render(<LanguageToggler />);
    expect(screen.getByText(/en|ru/i)).not.toBeNull();
  });
  it('LanguageToggler Must be clickable', () => {
    render(<LanguageToggler />);
    fireEvent.click(screen.getByText(/en|ru/i));
    fireEvent.click(screen.getByText(/ru/i), {
      target: <div>RU</div>,
    });
  });
});
