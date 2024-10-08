import './_MarkdownView.css'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownViewProps {
    content: string;
}

export default function MarkdownView({ content }: MarkdownViewProps): JSX.Element {
    return (
        <ReactMarkdown data-testid="markdownView" remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    )
}