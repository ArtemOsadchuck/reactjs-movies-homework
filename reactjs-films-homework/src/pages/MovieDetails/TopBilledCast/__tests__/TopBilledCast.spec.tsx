import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import TopBilledCast from '../TopBilledCast';

describe('TopBilledCast', () => {
  const mockProps = {
    adult: false,
    gender: 2,
    id: 192,
    known_for_department: 'Acting',
    name: 'Morgan Freeman',
    original_name: 'Morgan Freeman',
    popularity: 17.844,
    profile_path: '/oIciQWr8VwKoR8TmAw1owaiZFyb.jpg',
    cast_id: 4,
    character: "Ellis Boyd 'Red' Redding",
    credit_id: '52fe4231c3a36847f800b135',
    order: 1,
  };

  afterEach(() => {
    cleanup();
  });

  it('TopBilledCast snapshot', () => {
    const { asFragment } = render(<TopBilledCast props={mockProps} />);
    expect(asFragment).toMatchSnapshot();
  });

  it('TopBilledCast link must have attribute:', () => {
    render(<TopBilledCast props={mockProps} />);
    expect(screen.getByRole(/link/i)).toHaveAttribute('id');
    expect(screen.getByRole(/link/i)).toHaveAttribute('href');
  });
  it('TopBilledCast link must have text content:', () => {
    render(<TopBilledCast props={mockProps} />);
    expect(screen.getByRole(/link/i)).toHaveTextContent(/Red/i);
  });
  it('TopBilledCast img must have attribute:', () => {
    render(<TopBilledCast props={mockProps} />);
    expect(screen.getByRole(/img/i)).toHaveAttribute('alt');
    expect(screen.getByRole(/img/i)).toHaveAttribute('height');
    expect(screen.getByRole(/img/i)).toHaveAttribute('src');
  });
});
