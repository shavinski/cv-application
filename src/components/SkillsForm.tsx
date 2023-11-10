import React, { ChangeEvent, FormEvent, useState } from "react";
import { SkillsFormProps } from "../interfaces/UserInfoInterfaces";
import { createArrayForSkills } from "../utils/skillsFormUtils";
import '../styles/SkillsForm.css'

function SkillsForm({ handleSkillsInfoChange, skills }: SkillsFormProps) {
    const [showModal, setShowModal] = useState<Boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('Languages');
    const [newlyAddedSkill, setNewlyAddedSkill] = useState<string>('');
    const [newLanguages, setNewLanguages] = useState<string[]>([]);

    function displayModalForm() {
        setShowModal(!showModal)
    }

    function handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
        setSelectedCategory(event.target.value)
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setNewlyAddedSkill(event.target.value);
    }

    function handleAddingNewSkill(category: string, newSkills: string, event: FormEvent) {
        event.preventDefault();

        const skillsList = createArrayForSkills(newSkills);

        handleSkillsInfoChange(category, skillsList)
        setNewlyAddedSkill('');
        setShowModal(!showModal)
    }

    return (
        <>
            <div className="skills-main-container">
                <div className="skills-sub-container">
                    <div className="skills-list-container">
                        <h3>Languages</h3>
                        {skills.Languages.length === 0 &&
                            <small>You currently have 0 skills in languages. Add some!</small>
                        }
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
                        {skills.Libraries.length === 0 &&
                            <small>You currently have 0 skills in libraries. Add some!</small>
                        }
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
                        {skills['Frameworks/Tools'].length === 0 &&
                            <small>You currently have 0 skills in frameworks/tools. Add some!</small>
                        }
                        <ul>
                            {skills['Frameworks/Tools'].map((frameTool, index) => (
                                <li key={index}>
                                    {frameTool}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <button className='modal-open-btn' onClick={() => displayModalForm()}>Add skills</button>

                {showModal && (
                    <div className="modal">
                        <div onClick={displayModalForm} className="overlay"></div>
                        <form className="modal-form-skills">
                            <button type="button" className="modal-close-btn" onClick={displayModalForm}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                </svg>
                            </button>
                            <label htmlFor="category">What category would you like to add to?</label>
                            <select id="category" name="category" onChange={handleCategoryChange}>
                                {Object.keys(skills).map((cat) => (
                                    <option value={cat} key={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="new-skills">Add desired skills here (make sure to separate words with commas ex: CSS, HTML)</label>
                            <div className="skill-input">
                                <input id="new-skills" name="new-skills" onChange={handleInputChange} value={newlyAddedSkill}></input>
                                <button
                                    type="submit"
                                    onClick={(event) => handleAddingNewSkill(selectedCategory, newlyAddedSkill, event)}
                                    onKeyDown={(event) => handleAddingNewSkill(selectedCategory, newlyAddedSkill, event)}>
                                    +
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    )
}

export { SkillsForm }