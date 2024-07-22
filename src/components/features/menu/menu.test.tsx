import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Menu from './Menu';
import { MemoryRouter } from 'react-router-dom';


describe('<Menu />', () => {
    test('it should mount', () => {

        render(<Menu />, { wrapper: MemoryRouter });

        const menu = screen.getByTestId('menu');

        expect(menu).toBeInTheDocument();
    });
});