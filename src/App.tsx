import React, { useState } from 'react'
import './App.css'
import { UserInformation } from './components/UserInformation'
import { UserResume } from './components/UserResume'

function App() {
  const [heading, setHeading] = useState({
    name: '',
    position: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    linkedin: '',
  })

  function handleHeadingInfoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setHeading((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }


  return (
    <div className='app-main-container'>
      <UserInformation handleHeadingInfoChange={handleHeadingInfoChange} heading={heading} />
      <UserResume heading={heading} />
    </div>
  )
}

export default App
