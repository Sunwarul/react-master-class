import { render, screen } from '@testing-library/react';
import { MonsterRolodex } from './MonsterRolodex/index';

test('for searching a monster called Ervin', () => {
  render(<MonsterRolodex />);
  const linkElement = screen.getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});
