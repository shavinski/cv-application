import React, { useState } from 'react'
import './App.css'
import { UserInformation } from './components/UserInformation'
import { UserResume } from './components/UserResume'
import { HeadingInfo, SkillsInfo } from './interfaces/UserInfoInterfaces'

function App() {
  const [heading, setHeading] = useState<HeadingInfo>({
    name: '',
    position: '',
    email: '',
    phone: '',
    github: '',
    linkedin: '',
  })

  const [skills, setSkills] = useState<SkillsInfo>({
    'Languages': [],
    'Libraries': [],
    'Frameworks/Tools': []
  })

  function handleHeadingInfoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setHeading((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  function handleSkillsInfoChange(skillCategory: string, newSkills: string[]) {
    setSkills((prevData) => ({
      ...prevData,
      [skillCategory]: [...prevData[skillCategory], ...newSkills]
    }));
    console.log(`adding ${newSkills} to ${skillCategory}`)
  }


  return (
    <div className='app-main-container'>
        <UserInformation
          handleHeadingInfoChange={handleHeadingInfoChange}
          heading={heading}
          handleSkillsInfoChange={handleSkillsInfoChange}
          skills={skills} />
        <UserResume heading={heading} />
    </div>
  )
}

export default App
