import React from "react";
import "../styles/UserResume.css"

function UserResume({ heading }) {
    return (
        <>
            <h1>User Resume Here</h1>
            <section className="resume-container">
                <section className="resume-heading">
                    <div className="main-heading">
                        <h2>{heading.name}</h2>
                        <p>|</p>
                        <h2>{heading.position}</h2>
                    </div>
                    <div className="info-heading">
                        <h2>{heading.email}</h2>
                        <h2>{heading.phone}</h2>
                        <h2>{heading.location}</h2>
                        {heading.website &&
                            <a href={heading.website} target="_blank" rel="noopener noreferrer">Website</a>
                        }
                        {heading.linkedin &&
                            <a href={heading.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>

                        }
                    </div>
                </section>
            </section>
        </>
    )
}

export { UserResume }