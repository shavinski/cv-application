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
                            {skills.Languages.map((language, index) => (
                                <li key={index}>
                                    {language}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="skills-list-container">
                        <h3>Libraries</h3>
                        <ul>
                            {skills.Libraries.map((lib, index) => (
                                <li key={index}>
                                    {lib}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="skills-list-container">
                        <h3>Frameworks/Tools</h3>
                        <ul>
                            {skills['Frameworks/Tools'].map((frameTool, index) => (
                                <li key={index}>
                                    {frameTool}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <button onClick={() => displayModalForm()}>Add skills</button>

                {showModal && (
                    <div className="modal">
                        <div onClick={() => displayModalForm()} className="overlay"></div>
                        <form className="modal-form-skills">
                            <label htmlFor="">What category would you like to add to?</label>
                            <select>
                                {Object.keys(skills).map((cat) => (
                                    <option value={cat} key={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="">Add desired skills here (make sure to add one at a time)</label>
                            <input></input>
                            <button>Add</button>
                        </form>
                    </div>
                )}
            </div>
        </>
    )
}

export { SkillsForm }