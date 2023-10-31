import React from "react"
import { HeadingInformation } from "./HeadingInformation"
import { FormDropdown } from "./FormDropdown"
import { UserInformationProps } from "../interfaces/UserInfoInterfaces";

function UserInformation({ handleHeadingInfoChange, heading }: UserInformationProps) {

    return (
        <>
            <h1>Enter Information Here</h1>
            <FormDropdown ComponentForm={HeadingInformation} handleInfoChange={handleHeadingInfoChange} info={heading} title="Heading Information" />
        </>
    )
}

export { UserInformation }
