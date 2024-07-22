import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Timeline from './Timeline';
import { MemoryRouter } from 'react-router-dom';


describe('<Timeline />', () => {
    test('it should mount', () => {

        render(<Timeline />, { wrapper: MemoryRouter });

        const timeline = screen.getByTestId('timeline');

        expect(timeline).toBeInTheDocument();
    });
});