import Input from "./Input.jsx";

function Company (props) {
  return (
    <form className = "place" data-index = {props.index}>
      <div id = "header">
        <div id = "title">
          <input 
            type = "checkbox" 
            onChange = {props.showCompany} 
            checked = {props.show ? true : false} 
          />
          <p>{props.company}</p>
        </div>
        <div id = "control">
          <button type = "button" onClick = {props.removeCompany}>Remove</button>
        </div>
        
      </div>
      
      <div id = "place-info">
      <Input 
        title = "Company"
        type = "text" 
        name = "company"
        value = {props.company}
        onChange = {props.changePracticalExperiences}
      />
        
      <Input 
        title = "Role"
        type = "text" 
        name = "role"
        value = {props.role}
        onChange = {props.changePracticalExperiences}
      />
      
      <Input 
        title = "Position"
        type = "text" 
        name = "position"
        value = {props.position}
        onChange = {props.changePracticalExperiences}
      />
      
      <Input 
        title = "From"
        type = "date" 
        name = "from"
        value = {props.from}
        onChange = {props.changePracticalExperiences}
      />
      
      <Input 
        title = "To"
        type = "date" 
        name = "to"
        value = {props.to}
        onChange = {props.changePracticalExperiences}
      />
      
      </div>
    </form>
  );
}

function PracticalExperiences (props) {
  return (
    <>
      {props.practicalExperiences.map((place, index) => {
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
      <a href = "#" onClick = {props.newCompany}>+ Add company</a>
    </>
  );
}

export default PracticalExperiences
