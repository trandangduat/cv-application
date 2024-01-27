function Input (props) {
  return (
      <div>
        <label htmlFor = {props.name}>{props.title}</label>
        <input 
          type = {props.type} 
          name = {props.name} 
          id = {props.name}
          value = {props.value} 
          onChange = {props.onChange}
        />
      </div>
  );
}

export default Input
