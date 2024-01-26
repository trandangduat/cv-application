import Input from "./Input.jsx";

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

export default Education

