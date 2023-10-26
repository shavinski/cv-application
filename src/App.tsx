import { useState } from 'react'
import './App.css'
import { UserInformation } from './components/UserInformation'
import { UserResume } from './components/UserResume'

function App() {
  const [heading, setHeading] = useState({
    'name': 'Jakob Shavinski',
    'email': 'shavinski.jakob@gmial.com',
    'phone': '(805)813-7395',
    'location': 'Los Angeles'
  })



  return (
    <div className='app-main-container'>
      <UserInformation heading={heading} />
      <UserResume />
    </div>
  )
}

export default App
