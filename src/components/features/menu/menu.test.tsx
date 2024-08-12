
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Menu from './menu';
import { MemoryRouter } from 'react-router-dom';


describe('<Menu />', () => {
    test('it should mount', () => {

        render(<Menu />, { wrapper: MemoryRouter });

        const menu = screen.getByTestId('menu');

        expect(menu).toBeTruthy();
    });
});