import Input from "./Input.jsx";

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
