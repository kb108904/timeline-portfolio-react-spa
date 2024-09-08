
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SideBar from './sideBar';
import { MemoryRouter } from 'react-router-dom';


describe('<SideBar />', () => {
    test('it should mount', () => {

        render(<SideBar />, { wrapper: MemoryRouter });

        const sideBar = screen.getByTestId('sideBar');

        expect(sideBar).toBeInTheDocument();
    });
});