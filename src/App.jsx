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
        educationalExperiences = {educationalExperiences}


        
        changeFullName = {
          (e) => setFullName(e.target.value)
        }
        changePhoneNumber = {
          (e) => setContactInfos([e.target.value, contactInfos[1], contactInfos[2]])
        }
        changeEmail = {
          (e) => setContactInfos([contactInfos[0], e.target.value, contactInfos[2]])
        }
        changeAddress = {
          (e) => setContactInfos([contactInfos[0], contactInfos[1], e.target.value])
        }
        changeEducation = {
          (e) => {
            let index = e.target.parentElement.getAttribute("data-index");
            // IMPORTANT: 
            // 'const newEducation = educationalExperiences;' doesn't work here
            // because then 'newEducation' just references the existing array 
            const newEducation = [...educationalExperiences];
            for (let i = 0; i < newEducation.length; i++) {
              if (newEducation[i].id == index) {
                newEducation[i][e.target.getAttribute("name")] = e.target.value;
                break;
              }
            }
            setEducationalExperiences(newEducation);
          }
        }
        
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
