import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MarkdownView from './MarkdownView';
import { MemoryRouter } from 'react-router-dom';


describe('<MarkdownView />', () => {
    test('it should mount', () => {

        render(<MarkdownView />, { wrapper: MemoryRouter });

        const markdownView = screen.getByTestId('markdownView');

        expect(markdownView).toBeInTheDocument();
    });
});