
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainPage from './mainPage';
import { MemoryRouter } from 'react-router-dom';


describe('<MainPage />', () => {
    test('it should mount', () => {

        render(<MainPage />, { wrapper: MemoryRouter });

        const mainPage = screen.getByTestId('mainPage');

        expect(mainPage).toBeTruthy();
    });
});