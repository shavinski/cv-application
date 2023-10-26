import React from "react"

function UserInformation({ heading }) {
    return (
        <>
            <h1>Enter Information Here</h1>
            <div>
                <h2>Heading Information</h2>
                <p>{heading.name}</p>
                <p>{heading.email}</p>
                <p>{heading.phone}</p>
                <p>{heading.location}</p>
            </div>
        </>
    )
}

export { UserInformation }
