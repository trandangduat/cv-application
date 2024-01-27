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
        <p>{props.school}</p>
      </div>
      
      <Input 
        title = "School"
        type = "text" 
        name = "school"
        value = {props.school}
        onChange = {props.changeEducation}
      />
      
      <Input 
        title = "From"
        type = "date" 
        name = "from"
        value = {props.from}
        onChange = {props.changeEducation}
      />
      
      <Input 
        title = "To"
        type = "date" 
        name = "to"
        value = {props.to}
        onChange = {props.changeEducation}
      />
      
      <Input 
        title = "Role"
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

