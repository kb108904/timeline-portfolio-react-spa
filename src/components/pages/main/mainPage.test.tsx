import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MainPage from './MainPage';
import { MemoryRouter } from 'react-router-dom';


describe('<MainPage />', () => {
    test('it should mount', () => {

        render(<MainPage />, { wrapper: MemoryRouter });

        const mainPage = screen.getByTestId('mainPage');

        expect(mainPage).toBeInTheDocument();
    });
});