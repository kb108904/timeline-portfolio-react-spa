
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResumeSection from './resumeSection';
import { MemoryRouter } from 'react-router-dom';


describe('<ResumeSection />', () => {
    test('it should mount', () => {

        render(<ResumeSection />, { wrapper: MemoryRouter });

        const resumeSection = screen.getByTestId('resumeSection');

        expect(resumeSection).toBeInTheDocument();
    });
});