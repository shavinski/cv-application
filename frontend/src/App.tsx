import React, { useState } from 'react'
import './App.css'
import { UserInformation } from './components/UserInformation'
import { UserResume } from './components/UserResume'
import { HeadingInfo } from './interfaces/UserInfoInterfaces'

function App() {
  const [heading, setHeading] = useState<HeadingInfo>({
    name: 'Jakob Shavinski',
    position: 'Software Engineer',
    email: 'shavinski@gmail.com',
    phone: '(805)813-7395',
    github: 'github.com',
    linkedin: 'linkedin.com',
  })

  const [skills, setSkills] = useState<string[]>(['Javascript', 'SQL'])

  function handleHeadingInfoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setHeading((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleSkillsInfoChange(newSkill: string) {
    setSkills((prevData) => ([
      ...prevData,
      newSkill
    ]));
    console.log(`adding ${newSkill}`)
  }


  return (
    <div className='app-main-container'>
      <UserInformation
        handleHeadingInfoChange={handleHeadingInfoChange}
        heading={heading}
        handleSkillsInfoChange={handleSkillsInfoChange}
        skills={skills} />
      <UserResume heading={heading} skills={skills} />
    </div>
  )
}

export default App
