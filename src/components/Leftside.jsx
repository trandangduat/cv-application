import { useState } from "react";
import GeneralInfo from "./leftside/GeneralInfo.jsx";
import Education from "./leftside/Education.jsx";
import PracticalExperiences from "./leftside/PracticalExperiences.jsx";
import '../styles/Leftside.css'

function Section (props) {
  let content;
  switch (props.title) {
    case "General Information": {
      content = (
        <GeneralInfo 
          avatarSrc = {props.avatarSrc}
          fullName = {props.fullName}
          contactInfos = {props.contactInfos}
          changeAvatarSrc = {props.changeAvatarSrc}
          changeFullName = {props.changeFullName} 
          changePhoneNumber = {props.changePhoneNumber}
          changeEmail = {props.changeEmail}
          changeAddress = {props.changeAddress}
        />
      );
      break;
    } 
    case "Education": {
      content = (
        <Education
          educationalExperiences = {props.educationalExperiences}
          changeEducation = {props.changeEducation}
          removeSchool = {props.removeSchool}
          newSchool = {props.newSchool}
          showSchool = {props.showSchool}
        />
      );   
      break;
    }
    case "Practical Experiences": {
      content = (
        <PracticalExperiences 
          practicalExperiences = {props.practicalExperiences}
          changePracticalExperiences = {props.changePracticalExperiences}
          removeCompany = {props.removeCompany}
          newCompany = {props.newCompany}
          showCompany = {props.showCompany}
        />
      );
      break;
    }
    default:
  }

  const [windowMode, setWindowMode] = useState(false);
  const [sectionPosition, setSectionPosition] = useState({x: 0, y: 0});
  let cordDif; // distance between cursor coordinate and the section box coordinate

  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    cordDif = {
      x: e.clientX - sectionPosition.x,
      y: e.clientY - sectionPosition.y,
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    setSectionPosition({
      x: e.clientX - cordDif.x,
      y: e.clientY - cordDif.y,
    });
  };

  const handleMouseUp = (e) => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
  
  return (
    <section 
      className = "section" 
      id = {windowMode ? "window" : null}
      style = {
        windowMode ? {
          top: `${sectionPosition.y}px`,
          left: `${sectionPosition.x}px`
        } : null
      }
    >
      <div id = "header">
        <h2 onMouseDown = {windowMode ? handleMouseDown : null}>{props.title}
        </h2>
        {
          windowMode ? 
          <button type = "input" onClick = {() => setWindowMode(false)}>Down</button>
          :
          <button type = "input" onClick = {() => setWindowMode(true)}>Popup</button>
        }
      </div>
      <div id = "content">
        {content}
      </div>
    </section>
  );
}

function Leftside (props) {
  return (
    <div className = "panel" id = "left-side">
      <Section 
        title = "General Information" 
        key = "1"
        avatarSrc = {props.avatarSrc}
        fullName = {props.fullName}
        contactInfos = {props.contactInfos}
        changeAvatarSrc = {props.changeAvatarSrc}
        changeFullName = {props.changeFullName}
        changePhoneNumber = {props.changePhoneNumber}
        changeEmail = {props.changeEmail}
        changeAddress = {props.changeAddress}
      />
      <Section 
        title = "Education" 
        key = "2"
        educationalExperiences = {props.educationalExperiences}
        changeEducation = {props.changeEducation}
        removeSchool = {props.removeSchool}
        newSchool = {props.newSchool}
        showSchool = {props.showSchool}
      />
      <Section 
        title = "Practical Experiences"
        key = "3"
        practicalExperiences = {props.practicalExperiences}
        changePracticalExperiences = {props.changePracticalExperiences}
        removeCompany = {props.removeCompany}
        newCompany = {props.newCompany}
        showCompany = {props.showCompany}
      />
    </div>
  );
}

export default Leftside
