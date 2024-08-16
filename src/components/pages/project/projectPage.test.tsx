
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectPage from './projectPage';
import { MemoryRouter } from 'react-router-dom';
import { FilesProvider } from '../../../contexts/FilesContext';


describe('<ProjectPage />', () => {
    test('it should mount', () => {

        render(<FilesProvider><ProjectPage /></FilesProvider>, { wrapper: MemoryRouter });

        const projectPage = screen.getByTestId('projectPage');
        expect(projectPage).toBeTruthy();
    });
});