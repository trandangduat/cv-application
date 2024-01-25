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

function Place (props) {
  return (
    <form className = "place" data-index = {props.index}>
      <h1>{props.school}</h1>
      
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
    </form>
  );
}

function Education (props) {
  return (
    <>
      {props.educationalExperiences.map((place) => {
        return ( 
          <Place 
            from = {place.from}
            to = {place.to}
            role = {place.role}
            school = {place.school}
            index = {place.id}
            key = {place.id}
            changeEducation = {props.changeEducation}
          />
        )
      })}
    </>
  );
}

function Section (props) {
  let content;
  if (props.title == "General Information") {
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
  } else if (props.title == "Education") {
    content = (
      <Education
        educationalExperiences = {props.educationalExperiences}
        changeEducation = {props.changeEducation}
      />
    );   
  }
  return (
    <section className = "section">
      <div id = "header">
        <input type = "checkbox" />
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
      />
    </div>
  );
}

export default Leftside
