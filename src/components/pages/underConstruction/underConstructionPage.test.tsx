import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UnderConstructionPage from './underConstructionPage';
import { MemoryRouter } from 'react-router-dom';


describe('<UnderConstructionPage />', () => {
    test('it should mount', () => {

        render(<UnderConstructionPage />, { wrapper: MemoryRouter });

        const underConstructionPage = screen.getByTestId('underConstructionPage');

        expect(underConstructionPage).toBeInTheDocument();
    });
});