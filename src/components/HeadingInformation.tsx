import React from "react";
import { UserInformationProps } from "../interfaces/UserInfoInterfaces";



function HeadingInformation({ handleHeadingInfoChange, heading }: UserInformationProps) {
    return (
        <>
            <form action="">
                <h2>Heading Information</h2>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={heading.name}
                        placeholder="John Doe"
                        onChange={handleHeadingInfoChange} />
                </div>
                <div>
                    <label htmlFor="position">Position: </label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        value={heading.position}
                        placeholder="Software Engineer"
                        onChange={handleHeadingInfoChange} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={heading.email}
                        placeholder="johndoe@gmail.com"
                        onChange={handleHeadingInfoChange} />
                </div>
                <div>
                    <label htmlFor="phone">Phone: </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={heading.phone}
                        placeholder="(555)555-5555"
                        onChange={handleHeadingInfoChange} />
                </div>
                <div>
                    <h4>Optional Fields</h4>
                    <div>
                        <label htmlFor="github">Github: </label>
                        <input
                            type="text"
                            id="github"
                            name="github"
                            value={heading.github}
                            placeholder="https://portfoliosite.com"
                            onChange={handleHeadingInfoChange} />
                    </div>
                    <div>
                        <label htmlFor="linkedin">LinkedIn: </label>
                        <input
                            type="text"
                            id="linkedin"
                            name="linkedin"
                            value={heading.linkedin}
                            onChange={handleHeadingInfoChange} />
                    </div>
                </div>
                {/* <button onSubmit={handleHeadingInfoChange}>Submit</button> */}
            </form>
        </>
    )
}

export { HeadingInformation }