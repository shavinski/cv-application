import { HeadingInfo, SkillsInfo } from "../interfaces/UserInfoInterfaces";
import "../styles/UserResume.css"

interface UserHeadingProps {
    heading: HeadingInfo
    skills: SkillsInfo
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
                            {heading.email && <p>{heading.email}</p>}
                            {heading.phone && <p>| {heading.phone}</p>}
                            {heading.github && <a href={heading.github} target="_blank" rel="noopener noreferrer">| Github</a>}
                            {heading.linkedin && <a href={heading.linkedin} target="_blank" rel="noopener noreferrer">| LinkedIn</a>}
                        </div>
                    </section>
                    <section className="resume-skills-container">
                        {skills.Languages.length !== 0 &&
                            <div className="resume-skills-line">
                                <p><b>Languages:</b></p>
                                {skills.Languages.map((lang) => (
                                    <p key={lang}>{lang}</p>
                                ))}
                            </div>
                        }
                        {skills.Libraries.length !== 0 &&
                            <div className="resume-skills-line">
                                <p><b>Libraries:</b></p>
                                {skills.Libraries.map((lang) => (
                                    <p key={lang}>{lang}</p>
                                ))}
                            </div>
                        }
                        {skills['Frameworks/Tools'].length !== 0 &&
                            <div className="resume-skills-line">
                                <p><b>Frameworks/Tools:</b></p>
                                {skills['Frameworks/Tools'].map((lang) => (
                                    <p key={lang}>{lang}</p>
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