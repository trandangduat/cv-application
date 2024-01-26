function Input (props) {
  return (
      <input 
        type = {props.type} 
        name = {props.name} 
        id = {props.name}
        value = {props.value} 
        onChange = {props.onChange}
      />
  );
}

function GeneralInfo (props) {
  return (
    <form>
      <label htmlFor = "full-name">Full Name:</label>
      <Input 
        type = "text" 
        name = "full-name"  
        value = {props.fullName} 
        onChange = {props.changeFullName}
      />
      
      <label htmlFor = "phone-number">Phone number:</label>
      <Input 
        type = "number" 
        name = "phone-number" 
        value = {props.contactInfos[0]} 
        onChange={props.changePhoneNumber}
      />
      
      <label htmlFor = "email">Email address:</label>
      <Input 
        type = "email" 
        name = "email"
        value = {props.contactInfos[1]}
        onChange = {props.changeEmail}
      />
      
      <label htmlFor = "address">Address:</label>
      <Input 
        type = "text" 
        name = "address" 
        value = {props.contactInfos[2]}
        onChange = {props.changeAddress}
      />
    </form>
  );
}

function School (props) {
  return (
    <form className = "place" data-index = {props.index}>
      <div id = "header">
        <input 
          type = "checkbox" 
          onChange = {props.showSchool} 
          checked = {props.show ? true : false} 
        />
        <h1>{props.school}</h1>
      </div>
      
      <label htmlFor = "school">School:</label>
      <Input 
        type = "text" 
        name = "school"
        value = {props.school}
        onChange = {props.changeEducation}
      />
      
      <label htmlFor = "from">From:</label>
      <Input 
        type = "date" 
        name = "from"
        value = {props.from}
        onChange = {props.changeEducation}
      />
      
      <label htmlFor = "to">To:</label>
      <Input 
        type = "date" 
        name = "to"
        value = {props.to}
        onChange = {props.changeEducation}
      />
      
      <label htmlFor = "role">Role:</label>
      <Input 
        type = "text" 
        name = "role"
        value = {props.role}
        onChange = {props.changeEducation}
      />

      <button type = "button" onClick = {props.removeSchool}>Remove</button>
    </form>
  );
}

function Company (props) {
  return (
    <form className = "place" data-index = {props.index}>
      <div id = "header">
        <input 
          type = "checkbox" 
          onChange = {props.showCompany} 
          checked = {props.show ? true : false} 
        />
        <h1>{props.company}</h1>
      </div>
      
      <label htmlFor = "company">Company:</label>
      <Input 
        type = "text" 
        name = "company"
        value = {props.company}
        onChange = {props.changePracticalExperiences}
      />
      
      <label htmlFor = "from">From:</label>
      <Input 
        type = "date" 
        name = "from"
        value = {props.from}
        onChange = {props.changePracticalExperiences}
      />
      
      <label htmlFor = "to">To:</label>
      <Input 
        type = "date" 
        name = "to"
        value = {props.to}
        onChange = {props.changePracticalExperiences}
      />
      
      <label htmlFor = "role">Role:</label>
      <Input 
        type = "text" 
        name = "role"
        value = {props.role}
        onChange = {props.changePracticalExperiences}
      />
      
      <label htmlFor = "position">Position:</label>
      <Input 
        type = "text" 
        name = "position"
        value = {props.position}
        onChange = {props.changePracticalExperiences}
      />

      <button type = "button" onClick = {props.removeCompany}>Remove</button>
    </form>
  );
}

function Education (props) {
  return (
    <>
      {props.educationalExperiences.map((place, index) => {
        return ( 
          <School
            from = {place.from}
            to = {place.to}
            role = {place.role}
            school = {place.school}
            index = {index}
            key = {place.id}
            show = {place.show}
            changeEducation = {props.changeEducation}
            removeSchool = {props.removeSchool}
            showSchool = {props.showSchool}
          />
        )
      })}
      <a href = "#" onClick = {props.newSchool}>+ Add schools/universities</a>
    </>
  );
}

function PracticalExperiences (props) {
  return (
    <>
      {props.practicalExperiences.map((place, index) => {
        console.log(place);
        return ( 
          <Company
            from = {place.from}
            to = {place.to}
            role = {place.role}
            position = {place.position}
            company = {place.company}
            index = {index}
            key = {place.id}
            show = {place.show}
            changePracticalExperiences = {props.changePracticalExperiences}
            removeCompany = {props.removeCompany}
            showCompany = {props.showCompany}
          />
        )
      })}
      <a href = "#" onClick = {props.newCompany}>+ Add schools/universities</a>
    </>
  );
}

function Section (props) {
  let content;
  switch (props.title) {
    case "General Information": {
      content = (
        <GeneralInfo 
          fullName = {props.fullName}
          contactInfos = {props.contactInfos}
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
        <h1>{props.title}</h1>
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
        fullName = {props.fullName}
        contactInfos = {props.contactInfos}
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
