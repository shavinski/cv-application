import { ChangeEvent, FormEvent, useState } from "react";
import { SkillsFormProps } from "../interfaces/UserInfoInterfaces";
import { createArrayForSkills } from "../utils/skillsFormUtils";
import '../styles/SkillsForm.css'

function SkillsForm({ handleSkillsInfoChange, skills }: SkillsFormProps) {

    return (
        <>
            <div className="form-overlay">
                <div className="skills-main-container">
                    <form className="add-skill-form" action="">
                        <label htmlFor="skills">Add Skills</label>
                        <div>
                            <input id="skills" name="skills"></input>
                            <button type="submit">+</button>
                        </div>
                    </form>

                    <div className="skills-list-container">
                        {skills.map((skill) => (
                            <p key={skill}>{skill}</p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export { SkillsForm }