import {render, screen} from '@testing-library/react';
import {MonsterRolodex} from './MonsterRolodex/index';

test('for searching a monster called Ervin', async () => {
    render(<MonsterRolodex/>);
    // const linkElement = screen.getByText(/Loading/i);
    const monsters = await screen.findByText(/Bauch/i);
    expect(monsters).toBeInTheDocument();
});
