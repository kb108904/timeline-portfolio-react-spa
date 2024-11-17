import ResumeSection from '../../features/resumeSection/resumeSection';
import './_resumePage.css';

export default function ResumePage(): JSX.Element {
    return (
        <div className='resumePage container mt-4 mb-4' data-testid='resumePage'>

            {/* Social Media Links Section */}
            <section className='personal-section'>
                <div className='m-3'>
                    <a href="https://www.linkedin.com/in/kevindbrown0010/">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original-wordmark.svg" alt="LinkedIn" height="500"
                            style={{
                                width: '500px',
                                height: '100px',
                                objectFit: 'cover',
                                objectPosition: 'center'
                            }} />
                    </a>
                </div>
                <div className='d-flex m-3 gap-3 justify-content-center align-items-center'>
                    <a href="https://github.com/kb108904">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="GitHub" height="100" />
                    </a>
                    <a href="https://bitbucket.org/kb108904/workspace/repositories/">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg" alt="Bitbucket" height="100" />
                    </a>
                    <a href="https://www.hackerrank.com/profile/kb108904">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" alt="HackerRank" height="100" />
                    </a>
                </div>
            </section>
            <hr />
            <div className='list'>
                <div className='item'>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' alt="Git" />
                    <span className="caption">Git<br />8 years of experience<br />3 Professional Project<br />Managed version control</span>
                </div>
                <div className='item'>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' alt="Java" />
                    <span className="caption">Java<br />10+ years of experience<br />5+ Professional Project<br />Micro Services, API</span>
                </div>
                <div className='item'>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' alt="React" />
                    <span className="caption">React<br />1 years of experience<br />1 Professional Project<br />1 personal projects<br />2 training courses</span>
                </div>
                <div className='item'>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt="JavaScript" />
                    <span className="caption">JavaScript<br />6+ years<br />4+ Professional Project<br />Front-end Support, General Development</span>
                </div>
                <div className='item'>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' alt="TypeScript" />
                    <span className="caption">TypeScript<br />5+ years<br />3+ Professional Project<br />Front-end (ES6) & Backend (NodeJS/Express)</span>
                </div>
                <div className='item'>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' alt="HTML" />
                    <span className="caption">HTML<br />6+ years<br />4+ Professional Project<br />Front-end in support of Angular, React, & pure JS </span>
                </div>
                <div className='item'>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' alt="CSS" />
                    <span className="caption">CSS<br />6+ years<br />4+ Professional Project<br />Front-end</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="Linux" />
                    <span className="caption">Linux<br />20 years<br />Decades of use for both personal and professional projects since 2004</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg" alt="Windows" />
                    <span className="caption">Windows<br />30 years<br />Decades of use for both personal and professional projects since 1994</span>
                </div>
                <div className='item'>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg' alt="Angular" />
                    <span className="caption">Angular<br />5+ years<br />3 Professional Project<br />AngularJS, Angular11-16 Front-end Feature Development and Support</span>
                </div>
                <div className='item'>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' alt="Ruby" />
                    <span className="caption">Ruby<br />4 years<br />2 Professional Project<br />Used for Cucumber test step definition</span>
                </div>
                <div className='item'>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' alt="MongoDB" />
                    <span className="caption">MongoDB<br />1 years<br />1 Professional Project <br /> 1 Personal Project<br />Used for data management </span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" alt="Jest" />
                    <span className="caption">Jest<br />5 years<br />3 Professional Project<br />Unit testing framework used for multiple Angular projects</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" alt="Bash" />
                    <span className="caption">Bash Command Line Interface<br />20 years<br />Decades of use for both personal and professional projects since 2004</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cucumber/cucumber-plain.svg" />
                    <span className="caption">Cucumber<br />5+ years<br />3 Professional Project<br />Component testing framework used for multiple Angular/React projects</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />
                    <span className="caption">Bootstrap<br />4 years<br />1 Professional Project <br /> 3 Personal Project<br />CSS Style framework used on several personal and professional projects</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" />
                    <span className="caption">Eclipse<br />3 years<br />5 Professional Project<br />Main IDE until 2016</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original-wordmark.svg" />
                    <span className="caption">Gitlab<br />4 years<br />1 Professional Project<br />Main GIT repository used in parallel with Garrit while with CAS</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" />
                    <span className="caption">Jira<br />4 Years<br />4 Projects<br />Primary tool used for tracking issues, managing tasks, and facilitating agile workflows across multiple teams.</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" />
                    <span className="caption">Jenkins<br />5+ years<br />1 Professional Project<br />Main CI/CD pipeline used while with CAS and Chase</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original-wordmark.svg" />
                    <span className="caption">Maven<br />7+ years<br />4 Professional Project<br />Main Java build tool used while with FNFG and CAS</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
                    <span className="caption">NodeJS<br />2+ years<br />2 Professional Project<br />Main runtime environment and package manager used with while with CAS and CCH</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
                    <span className="caption">NPM<br />2+ years<br />2 Professional Project<br />Main runtime environment and package manager used with while with CAS and CCH</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original-wordmark.svg" />
                    <span className="caption">SocketIO<br />6 Months<br />1 Professional Project<br />Utilized to facilitate real-time, bidirectional communication between a frontend interface and backend services for the CCH project</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" />
                    <span className="caption">Spring/Spring Boot<br />5 Years<br />3 Professional Project<br />Utilized across projects, focusing on developing RESTful services, microservices architecture, and enterprise-level applications</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original-wordmark.svg" />
                    <span className="caption">Vite<br />1 year<br />1 Professional Project<br />Primary build tool for fast development and efficient module bundling, also used in 3 training projects</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" />
                    <span className="caption">VScode<br />1 year<br />Personal Use<br />Primary IDE used for personal projects and experimentation</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" />
                    <span className="caption">IntelliJ<br />5 year<br />3 Professional Project<br />Primary IDE used for professional projects the last 8 years</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original-wordmark.svg" />
                    <span className="caption">OpenCV<br />1 Project<br />Personal Use<br />Integrated for image processing within an Android app</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/putty/putty-original.svg" />
                    <span className="caption">PuTTY<br />Regular Use<br />Personal Projects<br />Used for SSH access and debugging networked devices at home</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original-wordmark.svg" />
                    <span className="caption">Raspberry Pi<br />8 Years<br />Personal Projects<br />Used for various electronics and networking projects</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original-wordmark.svg" />
                    <span className="caption">Arduino Studio<br />3 Years<br />Personal Projects<br />Primary IDE used for developing and testing Arduino projects</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg" />
                    <span className="caption">Arduino<br />15 Years<br />Personal Projects<br />Applied in numerous electronics and automation projects</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                    <span className="caption">Python<br />1 Year<br />Personal Projects<br />Used for scripting and automation in personal projects</span>
                </div>
                <div className='item'>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' alt="C" />
                    <span className="caption">C/C++<br />3 Semesters<br />Multiple Projects<br />Learned during college and applied in several academic projects</span>
                </div>
                <div className='item'>
                    <img src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' alt="C++" />
                    <span className="caption">C/C++<br />3 Semesters<br />Multiple Projects<br />Learned during college and applied in several academic projects</span>
                </div>
                <div className='item'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg" alt="Matlab" />
                    <span className="caption">MATLAB<br />3 Semesters<br />Multiple Projects<br />Developed skills in MATLAB for use in data modeling and academic research projects</span>
                </div>
                <div className='item'>
                    <img width="64" height="64" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-soldering-iron-engineering-flaticons-lineal-color-flat-icons.png" alt="external-soldering-iron-engineering-flaticons-lineal-color-flat-icons" />
                    <span className="caption">Soldering<br />20 Years (Personal), 3 Years (Professional)<br />Experience spanning personal electronics projects and professional testing as a technician, with a focus on precision work for circuitry repair.</span>
                </div>
                <div className='item'>
                    <img width="64" height="64" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-3d-printing-geek-culture-flaticons-lineal-color-flat-icons-3.png" alt="external-3d-printing-geek-culture-flaticons-lineal-color-flat-icons-3" />
                    <span className="caption">3D Printing<br />10 Years<br />Personal experience in building, running, modifying, and maintaining 3D printers, including custom setups and troubleshooting for personal projects.</span>
                </div>
                <div className='item'>
                    <img width="100" height="100" src="https://img.icons8.com/plasticine/100/computer-support.png" alt="computer-support" />
                    <span className="caption">Computer Repair & Support<br />20 Years<br />Extensive personal experience in diagnosing, repairing, and upgrading computers, including hardware, software, and network troubleshooting.</span>
                </div>

            </div>
            <hr />

            <ResumeSection
                logoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Logo_of_JPMorganChase_2024.svg/512px-Logo_of_JPMorganChase_2024.svg.png"
                companyName="JPMorgan Chase & Co."
                position="Software Engineer III"
                dates="February 2018 - Present"
                description="Responsible for developing, testing, and deploying scalable enterprise solutions in a fast-paced financial environment. Contributed to the creation of web applications and RESTful services using Java, Spring Boot, and Angular, enhancing the user experience for Chase customers. Collaborated across teams to implement CI/CD practices and utilized tools like Jenkins and Github for seamless deployment."
                justification="right"
            />

            <ResumeSection
                logoUrl="https://g2o.com/wp-content/uploads/2023/07/g2o-open-graph.png"
                companyName="G2O, Columbus OH"
                position="Software Developer"
                dates="January 2013 – November 2023"
                description="At G2O, I worked as a Software Developer across several major projects in healthcare, finance, and other business sectors. I led the development of REST APIs using Node.js and Express for the Cincinnati Children's Hospital Medical Center, implementing the HAPI FHIR standard for healthcare data sharing with authentication through Azure Active Directory. I also supported front-end development and implementation for the Chemical Abstracts Service, in addition to streamlining the onboarding process for new developers. Additionally, I contributed to various other projects, leveraging my adaptability, project management, and interpersonal skills to succeed. Throughout my time at G2O, I gained extensive experience in full-stack development, API integration, and team collaboration, helping clients build scalable and efficient systems."
                justification="left"
            />

            <ResumeSection
                logoUrl="https://cdn.prod.website-files.com/592475953be4b41fc86d3961/59248a575a5e053f301da9be_Logo%20and%20Name_Red_Small.png"
                companyName="Knockout Concepts"
                position="Freelance Android Developer"
                dates="2015 – 2017"
                description="Building on my experience as a junior contracting developer, I took the initiative to secure my own client for part-time contracted work. I managed the full lifecycle of the project, from initial planning and requirements gathering to final delivery, ensuring that all milestones were met within the set timeframe. By effectively balancing client expectations and project goals, I successfully executed the project, demonstrating my strong organizational and communication skills."
                justification="right"
            />

            <ResumeSection
                logoUrl="https://lsicorp.com/adl/wp-content/uploads/sites/6/2024/07/logo_adl.svg"
                companyName="LSI ADL Technology"
                position="Test Technician"
                dates="2010 – 2013"
                description="With LSI ADL Technology, I served as a Test Technician where I followed detailed instructions for setting up electronics test fixtures, investigated circuit board failures by inspecting surface mount electronics under a microscope and or x-ray, and conducted environmental and burn-in tests to determine product failure rates. With them I also certified in hand-soldering circuit boards and regularly used a soldering iron, hot air tools, solder pots, and reflow oven. My time at ADL allowed me to develop strong technical troubleshooting skills and gain hands-on experience with electronics in a critical testing environment."
                justification="left"
            />

        </div>
    );
}