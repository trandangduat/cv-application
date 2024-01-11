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
      <Leftside />
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
