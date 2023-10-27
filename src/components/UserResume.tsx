import React from "react";

function UserResume({ heading }) {
    return (
        <>
            <h1>User Resume Here</h1>
            <section className="resume-container">
                <section className="resume-heading">
                    <div className="main-heading">
                        <h2>{heading.name}</h2>
                        <h2>{heading.position}</h2>
                    </div>
                    <div className="info-heading">
                        <h2>{heading.email}</h2>
                        <h2>{heading.phone}</h2>
                        <h2>{heading.location}</h2>
                    </div>
                </section>
            </section>
        </>
    )
}

export { UserResume }