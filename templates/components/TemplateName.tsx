import './_TemplateName.scss'

interface TemplateNameProps {}

export default function TemplateName({}: TemplateNameProps): JSX.Element {
    return (
        <div className='templateName' data-testid='templateName'>
            <h1>TemplateName component created</h1>
        </div>
    );
}