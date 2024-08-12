
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MarkdownView from './MarkdownView';
import { MemoryRouter } from 'react-router-dom';


describe('<MarkdownView />', () => {
    test('it should mount', () => {

        const text_input = "Test Input"
        render(<MarkdownView content={text_input} />, { wrapper: MemoryRouter });

        const markdownView = screen.getByText(text_input);

        expect(markdownView).toBeTruthy();
    });
});