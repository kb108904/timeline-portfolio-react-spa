import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CollapsibleContainer from './CollapsibleContainer';
import { MemoryRouter } from 'react-router-dom';


describe('<CollapsibleContainer />', () => {
    test('it should mount', () => {

        render(<CollapsibleContainer />, { wrapper: MemoryRouter });

        const collapsibleContainer = screen.getByTestId('collapsibleContainer');

        expect(collapsibleContainer).toBeInTheDocument();
    });
});