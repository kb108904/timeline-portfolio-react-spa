import './_templateName.css'

interface TemplateNameProps {}

export default function TemplateName({}: TemplateNameProps): JSX.Element {
    return (
        <div className='templateName' data-testid='templateName'>
            <h1>TemplateName feature component created</h1>
        </div>
    );
}