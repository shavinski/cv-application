import { ChangeEvent, FormEvent, useState } from "react";
import { SkillsFormProps } from "../interfaces/UserInfoInterfaces";
import '../styles/SkillsForm.css'

function SkillsForm({ handleSkillsInfoChange, skills }: SkillsFormProps) {
    const [newSkill, setNewSkill] = useState<string>('')

    function handleSkillInput(e: ChangeEvent<HTMLInputElement>) {
        setNewSkill(e.target.value)
    }

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        handleSkillsInfoChange(newSkill)
        console.log(`new skill ${newSkill}`)

        setNewSkill('');
    }


    return (
        <>
            <div className="form-overlay">
                <div className="skills-main-container">
                    <form className="add-skill-form" action="">
                        <label htmlFor="skills">Add Skills</label>
                        <div>
                            <input id="skills" name="skills" value={newSkill} onChange={handleSkillInput}></input>
                            <button type="submit" onClick={handleSubmit}>+</button>
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