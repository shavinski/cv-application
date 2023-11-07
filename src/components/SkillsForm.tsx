import React, { useState } from "react";
import { SkillsFormProps } from "../interfaces/UserInfoInterfaces";
import '../styles/SkillsForm.css'

function SkillsForm({ handleSkillsInfoChange, skills }: SkillsFormProps) {
    const [showModal, setShowModal] = useState(false);

    function displayModalForm() {
        setShowModal(!showModal)
    }

    return (
        <>
            <div className="skills-main-container">
                <div className="skills-sub-container">
                    <div className="skills-list-container">
                        <h3>Languages</h3>
                        <ul>
                            {skills.languages.map((language, index) => (
                                <li key={index}>
                                    {language}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="skills-list-container">
                        <h3>Libraries</h3>
                        <ul>
                            {skills.libraries.map((lib, index) => (
                                <li key={index}>
                                    {lib}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="skills-list-container">
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

                <button onClick={() => displayModalForm()}>Add skills</button>
                
                {showModal && (
                    <div>
                        <h1>This is the modal i want to show</h1>
                    </div>
                )}
            </div>
        </>
    )
}

export { SkillsForm }