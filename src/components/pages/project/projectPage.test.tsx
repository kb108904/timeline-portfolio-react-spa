import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProjectPage from './ProjectPage';
import { MemoryRouter } from 'react-router-dom';


describe('<ProjectPage />', () => {
    test('it should mount', () => {

        render(<ProjectPage />, { wrapper: MemoryRouter });

        const projectPage = screen.getByTestId('projectPage');

        expect(projectPage).toBeInTheDocument();
    });
});