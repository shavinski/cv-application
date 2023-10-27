import { useState } from 'react'
import './App.css'
import { UserInformation } from './components/UserInformation'
import { UserResume } from './components/UserResume'

function App() {
  const [heading, setHeading] = useState({
    name: 'Jakob Shavinski',
    email: 'shavinski.jakob@gmial.com',
    phone: '(805)813-7395',
    location: 'Los Angeles'
  })

  function handleHeadingChange() {
    setHeading(heading)
  }


  return (
    <div className='app-main-container'>
      <UserInformation />
      <UserResume heading={heading} />
    </div>
  )
}

export default App
