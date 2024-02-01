import { useState, useRef } from "react";
import GeneralInfo from "./leftside/GeneralInfo.jsx";
import Education from "./leftside/Education.jsx";
import PracticalExperiences from "./leftside/PracticalExperiences.jsx";
import '../styles/Leftside.css'
import Icon from '@mdi/react';
import { mdiArrowBottomLeft } from '@mdi/js';
import { mdiOpenInNew } from '@mdi/js';

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
  const cordDif = useRef({x: 0, y: 0}); //  distance between cursor coordinate and the section box coordinate
  
  const handleMouseDown = (e) => {
    cordDif.current = {
      x: e.clientX - sectionPosition.x,
      y: e.clientY - sectionPosition.y,
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    e.preventDefault();
    e.stopPropagation();
  };

  const handleMouseMove = (e) => {
    setSectionPosition({
      x: e.clientX - cordDif.current.x,
      y: e.clientY - cordDif.current.y,
    });
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const changeZIndex = (e) => {
    if (!props.isOnTop) {
      props.setSectionOnTop(props.index);
      const newZIndex = props.zIndexCount + 1;
      props.setZIndexCount(newZIndex);
    }
  }
  
  return (
    <section 
      className = "section" 
      id = {windowMode ? "window" : null}
      onClick = {changeZIndex}
      style = {
        windowMode ? {
          top: `${sectionPosition.y}px`,
          left: `${sectionPosition.x}px`,
          zIndex: `${props.isOnTop ? props.zIndexCount : null}`,
        } : {
          width: 'auto',
          height: 'auto',
        }
      }
    >
      <div id = "header">
        <h2 onMouseDown = {windowMode ? handleMouseDown : null}>{props.title}
        </h2>
        {
          windowMode ? 
          <button type = "button" onClick = {() => setWindowMode(false)}>
            <Icon path={mdiArrowBottomLeft} size={1 / 1.5} />
          </button>
          :
          <button type = "button" onClick = {() => setWindowMode(true)}>
            <Icon path={mdiOpenInNew} size={1 / 1.5} />
          </button>
        }
      </div>
      <div id = "content">
        {content}
      </div>
    </section>
  );
}

function Leftside (props) {
  const [sectionOnTop, setSectionOnTop] = useState(1);
  const [zIndexCount, setZIndexCount] = useState(10);
  return (
    <div className = "panel" id = "left-side">
      <Section 
        title = "General Information" 
        key = "1"
        index = "1"
        isOnTop = {sectionOnTop == 1}
        zIndexCount = {zIndexCount}
        setSectionOnTop = {setSectionOnTop}
        setZIndexCount = {setZIndexCount}
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
        index = "2"
        isOnTop = {sectionOnTop == 2}
        zIndexCount = {zIndexCount}
        setSectionOnTop = {setSectionOnTop}
        setZIndexCount = {setZIndexCount}
        educationalExperiences = {props.educationalExperiences}
        changeEducation = {props.changeEducation}
        removeSchool = {props.removeSchool}
        newSchool = {props.newSchool}
        showSchool = {props.showSchool}
      />
      <Section 
        title = "Practical Experiences"
        key = "3"
        index = "3"
        isOnTop = {sectionOnTop == 3}
        zIndexCount = {zIndexCount}
        setSectionOnTop = {setSectionOnTop}
        setZIndexCount = {setZIndexCount}
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
