import React, { useState } from "react";
import { SkillsFormProps } from "../interfaces/UserInfoInterfaces";
import '../styles/SkillsForm.css'

function SkillsForm({ handleSkillsInfoChange, skills }: SkillsFormProps) {
    const [showModal, setShowModal] = useState<Boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('Languages');
    const [newlyAddedSkill, setNewlyAddedSkill] = useState<string>('');
    const [newLanguages, setNewLanguages] = useState<string[]>([]);

    function displayModalForm() {
        setShowModal(!showModal)
    }

    function handleCategoryChange(event) {
        setSelectedCategory(event.target.value)
    }

    function handleInputChange(event) {
        setNewlyAddedSkill(event.target.value);
    }

    function handleAddingNewSkill(category, newSkill, event) {
        event.preventDefault();

        console.log(category, newSkill)
        if (category === 'Languages') {
            setNewLanguages((prev) => [...prev, newSkill]);
        }

        setNewlyAddedSkill('');
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
                        <div onClick={displayModalForm} className="overlay"></div>
                        <form className="modal-form-skills">
                            <label htmlFor="category">What category would you like to add to?</label>
                            <select id="category" name="category" onChange={handleCategoryChange}>
                                {Object.keys(skills).map((cat) => (
                                    <option value={cat} key={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="new-skills">Add desired skills here (make sure to separate words with commas ex: Nice, Skill)</label>
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