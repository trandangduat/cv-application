import Input from "./Input.jsx";

function GeneralInfo (props) {
  return (
    <form>
      <Input 
        title = "Profile picture"
        type = "file"
        name = "avatar"
        onChange = {props.changeAvatarSrc}
      />
      
      <Input 
        title = "Full name"
        type = "text" 
        name = "full-name"  
        value = {props.fullName} 
        onChange = {props.changeFullName}
      />
      
      <Input 
        title = "Phone number"
        type = "number" 
        name = "phone-number" 
        value = {props.contactInfos[0]} 
        onChange={props.changePhoneNumber}
      />
      
      <Input 
        title = "Email address"
        type = "email" 
        name = "email"
        value = {props.contactInfos[1]}
        onChange = {props.changeEmail}
      />
      
      <Input 
        title = "Address"
        type = "text" 
        name = "address" 
        value = {props.contactInfos[2]}
        onChange = {props.changeAddress}
      />
    </form>
  );
}

export default GeneralInfo
