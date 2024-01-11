function GeneralInfo (props) {
  return (
    <form>
      <label for = "full-name">Full Name:</label>
      <input 
        type = "text" name = "full-name" id = "full-name" 
        value = {props.fullName} 
        onChange = {props.changeFullName}
      />
      
      <label for = "phone-number">Phone number:</label>
      <input type = "number" name = "phone-number" id = "phone-number" 
        value = {props.contactInfos[0]} 
        onChange={props.changePhoneNumber}
      />
      
      <label for = "email">Email address:</label>
      <input type = "email" name = "email" id = "email" 
        value = {props.contactInfos[1]}
        onChange = {props.changeEmail}
      />
      
      <label for = "address">Address:</label>
      <input type = "text" name = "address" id = "address" 
        value = {props.contactInfos[2]}
        onChange = {props.changeAddress}
      />
    </form>
  );
}

function Section (props) {
  return (
    <section className = "section">
      <div id = "header">
        <input type = "checkbox" />
        <h1>{props.title}</h1>
      </div>
      <div id = "content">
        <GeneralInfo 
          fullName = {props.fullName}
          contactInfos = {props.contactInfos}
          changeFullName = {props.changeFullName} 
          changePhoneNumber = {props.changePhoneNumber}
          changeEmail = {props.changeEmail}
          changeAddress = {props.changeAddress}
        />
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
    </div>
  );
}

export default Leftside
