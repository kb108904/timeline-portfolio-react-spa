import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TemplateName from './TemplateName';
import { MemoryRouter } from 'react-router-dom';


describe('<TemplateName />', () => {
    test('it should mount', () => {

        render(<TemplateName />, { wrapper: MemoryRouter });

        const templateName = screen.getByTestId('templateName');

        expect(templateName).toBeInTheDocument();
    });
});