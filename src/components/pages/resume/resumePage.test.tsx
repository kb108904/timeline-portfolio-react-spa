import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResumePage from './ResumePage';
import { MemoryRouter } from 'react-router-dom';


describe('<ResumePage />', () => {
    test('it should mount', () => {

        render(<ResumePage />, { wrapper: MemoryRouter });

        const resumePage = screen.getByTestId('resumePage');

        expect(resumePage).toBeInTheDocument();
    });
});