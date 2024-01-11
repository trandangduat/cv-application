import { useState } from 'react'
import './App.css'
import { exampleGeneralInfo, exampleEducationalExperiences, examplePracticalExperiences } from './exampleInfo.js'
import Leftside from './components/Leftside.jsx'
import Rightside from './components/Rightside.jsx'
  
function App() {
  const [fullName, setFullName] = useState("YOUR NAME");
  const [contactInfos, setContactInfos] = useState(exampleGeneralInfo);
  const [educationalExperiences, setEducationalExperiences] = useState(exampleEducationalExperiences);
  const [practicalExperiences, setPracticalExperiences] = useState(examplePracticalExperiences);

  return (
   <>
      <Leftside 
        fullName = {fullName}
        contactInfos = {contactInfos}
        changeFullName = {(e) => setFullName(e.target.value)}
        changePhoneNumber = {(e) => setContactInfos([e.target.value, contactInfos[1], contactInfos[2]])}
        changeEmail = {(e) => setContactInfos([contactInfos[0], e.target.value, contactInfos[2]])}
        changeAddress = {(e) => setContactInfos([contactInfos[0], contactInfos[1], e.target.value])}
        
      />
      <Rightside 
        fullName = {fullName} 
        contactInfos={contactInfos} 
        educationalExperiences={educationalExperiences} 
        practicalExperiences={practicalExperiences}
      />
   </>
  )
}


export default App
