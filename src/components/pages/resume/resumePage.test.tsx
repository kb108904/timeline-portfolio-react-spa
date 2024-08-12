import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react';
import ResumePage from './resumePage';
import { MemoryRouter } from 'react-router-dom';



describe('<ResumePage />', () => {

    test('it should mount', () => {

        render(<ResumePage />, { wrapper: MemoryRouter });

        const resumePage = screen.getByTestId('resumePage');

        expect(resumePage).toBeTruthy();
    });
});
