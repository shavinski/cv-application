import React from "react"

function UserInformation() {
    return (
        <>
            <h1>Enter Information Here</h1>
            <div>
                <h2>Heading Information</h2>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input type="text" />
                </div>
            </div>
        </>
    )
}

export { UserInformation }
