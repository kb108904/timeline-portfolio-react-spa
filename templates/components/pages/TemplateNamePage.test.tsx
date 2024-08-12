import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TemplateNamePage from './templateNamePage';
import { MemoryRouter } from 'react-router-dom';


describe('<TemplateNamePage />', () => {
    test('it should mount', () => {

        render(<TemplateNamePage />, { wrapper: MemoryRouter });

        const templateNamePage = screen.getByTestId('templateNamePage');

        expect(templateNamePage).toBeInTheDocument();
    });
});