import { render, screen } from '@testing-library/react';
// import { MonsterRolodex } from './MonsterRolodex/index';
import { CrawnClothing } from './CrawnClothing'

test('find the text HomePage on the document', async () => {
    render(<CrawnClothing />);
    // const linkElement = screen.getByText(/Loading/i);
    const monsters = await screen.findByText(/Homepage/i);
    expect(monsters).toBeInTheDocument();
});
