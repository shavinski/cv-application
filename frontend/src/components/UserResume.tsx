import { HeadingInfo } from "../interfaces/UserInfoInterfaces";
import "../styles/UserResume.css"

interface UserHeadingProps {
    heading: HeadingInfo
    skills: string[]
}

function UserResume({ heading, skills }: UserHeadingProps) {
    return (
        <>
            <div className="main-resume-container">
                <h2>Resume Preview</h2>
                <section className="resume-container">
                    <section className="resume-heading">
                        <div className="main-heading">
                            <h2>{heading.name}</h2>
                            {heading.position && <h2>| {heading.position}</h2>}
                        </div>
                        <div className="info-heading">
                            {heading.phone && <p>{heading.phone}</p>}
                            {heading.email && <p>| {heading.email}</p>}
                            {heading.github && <a href={heading.github} target="_blank" rel="noopener noreferrer">| Github</a>}
                            {heading.linkedin && <a href={heading.linkedin} target="_blank" rel="noopener noreferrer">| LinkedIn</a>}
                        </div>
                    </section>
                    <section className="resume-skills-container">
                        {skills.length !== 0 &&
                            <div className="resume-skills-line">
                                <p><b>Languages:</b></p>
                                {skills.map((skill) => (
                                    <p key={skill}>{skill}</p>
                                ))}
                            </div>
                        }
                    </section>
                </section>
            </div>
        </>
    )
}

export { UserResume }