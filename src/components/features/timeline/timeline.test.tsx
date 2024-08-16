
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Timeline from './timeline';
import { MemoryRouter } from 'react-router-dom';

import { FilesProvider } from '../../../contexts/FIlesContext';


describe('<Timeline />', () => {
    test('it should mount', () => {

        render(<FilesProvider><Timeline /></FilesProvider>, { wrapper: MemoryRouter });

        // const timeline = screen.getByTestId('timeline');

        // expect(timeline).toBeTruthy();
        expect(true).toBeTruthy();
    });
});