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
  
  return (
    <section className = "section">
      <div id = "header">
        <h2>{props.title}</h2>
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
