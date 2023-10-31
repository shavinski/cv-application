import React from "react";
import { HeadingInfo } from "../interfaces/UserInfoInterfaces";
import "../styles/UserResume.css"

interface UserHeadingProps {
    heading: HeadingInfo
}

function UserResume({ heading }: UserHeadingProps) {
    return (
        <>
            <h1>User Resume Here</h1>
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
            </section>
        </>
    )
}

export { UserResume }