import React from "react";
import { SkillsFormProps } from "../interfaces/UserInfoInterfaces";
import '../styles/SkillsForm.css'

function SkillsForm({ handleSkillsInfoChange, skills }: SkillsFormProps) {
    return (
        <>
            <div className="skills-main-container">
                <div className="skills-sub-container">
                    <h3>Languages</h3>
                    <ul>
                        {skills.languages.map((language, index) => (
                            <li key={index}>
                                {language}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="skills-sub-container">
                    <h3>Libraries</h3>
                    <ul>
                        {skills.libraries.map((lib, index) => (
                            <li key={index}>
                                {lib}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="skills-sub-container">
                    <h3>Frameworks/Tools</h3>
                    <ul>
                        {skills['frameworks/tools'].map((frameTool, index) => (
                            <li key={index}>
                                {frameTool}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    )
}

export { SkillsForm }