import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TemplateNamePage from './TemplateNamePage';
import { MemoryRouter } from 'react-router-dom';


describe('<TemplateNamePage />', () => {
    test('it should mount', () => {

        render(<TemplateNamePage />, { wrapper: MemoryRouter });

        const templateNamePage = screen.getByTestId('templateNamePage');

        expect(templateNamePage).toBeInTheDocument();
    });
});