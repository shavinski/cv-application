import React from "react"
import { HeadingForm } from "./HeadingForm"
import { SkillsForm } from "./SkillsForm";
import { FormDropdown } from "./FormDropdown"
import { UserInformationProps } from "../interfaces/UserInfoInterfaces";
import "../styles/UserInformation.css"


function UserInformation({
    handleHeadingInfoChange,
    heading,
    handleSkillsInfoChange,
    skills
}: UserInformationProps) {

    return (
        <>
            <div className="main-userinfo-container">
                <h2>Your Info Here</h2>
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
            </div>
        </>
    )
}

export { UserInformation }
