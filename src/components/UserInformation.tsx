import React from "react"
import { HeadingInformation } from "./HeadingInformation"
import { FormDropdown } from "./FormDropdown"
import { HeadingInfo } from "../interfaces/UserInfoInterfaces";
import { ChangeInfoHandler } from "../interfaces/FunctionInterfaces";
import { UserInformationProps } from "../interfaces/UserInfoInterfaces";

function UserInformation({ handleHeadingInfoChange, heading }: UserInformationProps) {

    return (
        <>
            <h1>Enter Information Here</h1>
            <FormDropdown
                form={<HeadingInformation
                    handleHeadingInfoChange={handleHeadingInfoChange}
                    heading={heading} />}
                title="Heading Information"
            />
        </>
    )
}

export { UserInformation }
