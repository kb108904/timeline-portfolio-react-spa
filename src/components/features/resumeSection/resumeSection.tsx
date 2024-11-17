import './_resumeSection.css'

interface ResumeSectionProps {
    logoUrl: string,
    companyName: string,
    position: string,
    dates: string,
    description: string,
    justification: 'left' | 'right'
}

export default function ResumeSection({ logoUrl, companyName, position, dates, description, justification }: ResumeSectionProps): JSX.Element {

    return (
        <div className={`autoShow d-flex flex-column resume-section ${justification === 'left' ? 'left-aligned flex-lg-row-reverse' : 'right-aligned flex-lg-row'}`}>
            
            <img src={logoUrl} alt={`${companyName} Logo`} className="companyLogo" />

            <div className="experience-content">
                <h2 className="company-name">{companyName}</h2>
                <h3 className="position">{position}</h3>
                <p className="experience-dates">{dates}</p>
                <p className="experience-description">{description}</p>
            </div>
        </div>
    );
}