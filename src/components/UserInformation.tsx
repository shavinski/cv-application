import React from "react"
import { HeadingForm } from "./HeadingForm"
import { SkillsForm } from "./SkillsForm";
import { FormDropdown } from "./FormDropdown"
import { UserInformationProps } from "../interfaces/UserInfoInterfaces";

function UserInformation({
    handleHeadingInfoChange,
    heading,
    handleSkillsInfoChange,
    skills
}: UserInformationProps) {

    return (
        <>
            <h1>Enter Information Here</h1>
            <FormDropdown
                form={<HeadingForm
                    handleHeadingInfoChange={handleHeadingInfoChange}
                    heading={heading} />}
                title="Heading Information"
            />
            <FormDropdown
                form={<SkillsForm
                    handleSkillsInfoChange={handleSkillsInfoChange}
                    skills={skills} />}
                title="Skills Information"
            />
        </>
    )
}

export { UserInformation }
