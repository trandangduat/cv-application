import Input from "./Input.jsx";

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

export default GeneralInfo
