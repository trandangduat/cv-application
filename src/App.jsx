import { useState } from 'react'
import './App.css'
import { exampleGeneralInfo, exampleEducationalExperiences, examplePracticalExperiences } from './exampleInfo.js'
import Leftside from './components/Leftside.jsx'
import Rightside from './components/Rightside.jsx'
  
function App() {
  const [avatarSrc, setAvatarSrc] = useState("");
  const [fullName, setFullName] = useState("YOUR NAME");
  const [contactInfos, setContactInfos] = useState(exampleGeneralInfo);
  const [educationalExperiences, setEducationalExperiences] = useState(exampleEducationalExperiences);
  const [practicalExperiences, setPracticalExperiences] = useState(examplePracticalExperiences);

  return (
   <>
      <Leftside 
        avatarSrc = {avatarSrc}
        fullName = {fullName}
        contactInfos = {contactInfos}
        educationalExperiences = {educationalExperiences}
        practicalExperiences = {practicalExperiences}
        
        changeAvatarSrc = {
          (event) => {
            let input = event.target;
            // Ensure that a file was selected
            if (input.files && input.files[0]) {
              let reader = new FileReader();
              // Set up the reader to load the image
              reader.onload = function (e) {
                setAvatarSrc(e.target.result);
              };
              // Read the image file as a data URL
              reader.readAsDataURL(input.files[0]);
            } else {
              // If no file is selected, clear the preview
              alert("No file was chosen!");
            }
          } 
        }
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
            let index = e.target.closest(".place").getAttribute("data-index");
            // IMPORTANT: 
            // 'const newEducation = educationalExperiences;' doesn't work here
            // because then 'newEducation' just references the existing array 
            const newEducation = [...educationalExperiences];
            newEducation[index][e.target.getAttribute("name")] = e.target.value;
            setEducationalExperiences(newEducation);
          }
        }
        removeSchool = {
          (e) => {
            let index = e.target.closest(".place").getAttribute("data-index");
            const newEducation = [...educationalExperiences];
            newEducation.splice(index, 1);
            setEducationalExperiences(newEducation);
          }
        }
        newSchool = {
          (e) => {
            e.preventDefault();
            const newEducation = [...educationalExperiences];
            newEducation.push(
              {
                "from": "",
                "to": "",
                "role": "",
                "school": "School/ University name",
                "id": crypto.randomUUID(),
                "show": 1,
              }
            );
            setEducationalExperiences(newEducation);
          }
        }
        showSchool = {
          (e) => {
            let index = e.target.closest(".place").getAttribute("data-index");
            const newEducation = [...educationalExperiences];
            if (newEducation[index].show) {
              newEducation[index].show = 0;
            } else {
              newEducation[index].show = 1;
            }
            setEducationalExperiences(newEducation);
          }
        }
        changePracticalExperiences = {
          (e) => {
            let index = e.target.closest(".place").getAttribute("data-index");
            const newPracticalExperiences = [...practicalExperiences];
            newPracticalExperiences[index][e.target.getAttribute("name")] = e.target.value;
            setPracticalExperiences(newPracticalExperiences);
          }
        }
        removeCompany = {
          (e) => {
            let index = e.target.closest(".place").getAttribute("data-index");
            const newPracticalExperiences = [...practicalExperiences];
            newPracticalExperiences.splice(index, 1);
            setPracticalExperiences(newPracticalExperiences);
          }
        }
        newCompany = {
          (e) => {
            e.preventDefault();
            const newPracticalExperiences = [...practicalExperiences];
            newPracticalExperiences.push(
              {
                "from": "",
                "to": "",
                "role": "",
                "position": "",
                "company": "Company name",
                "id": crypto.randomUUID(),
                "show": 1,
              },
            );
            setPracticalExperiences(newPracticalExperiences);
          }
        }
        showCompany = {
          (e) => {
            let index = e.target.closest(".place").getAttribute("data-index");
            const newPracticalExperiences = [...practicalExperiences];
            if (newPracticalExperiences[index].show) {
              newPracticalExperiences[index].show = 0;
            } else {
              newPracticalExperiences[index].show = 1;
            }
            setPracticalExperiences(newPracticalExperiences);
          }
        }
        
      />
      <Rightside 
        avatarSrc = {avatarSrc}
        fullName = {fullName} 
        contactInfos = {contactInfos} 
        educationalExperiences = {educationalExperiences} 
        practicalExperiences = {practicalExperiences}
      />
   </>
  )
}


export default App
