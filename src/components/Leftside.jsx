function GeneralInfo () {
  return (
    <form>
      <label for = "full-name">Full Name:</label>
      <input type = "text" name = "full-name" id = "full-name"/>
      
      <label for = "phone-number">Phone number:</label>
      <input type = "number" name = "phone-number" id = "phone-number"/>
      
      <label for = "email">Email address:</label>
      <input type = "email" name = "email" id = "email"/>
      
      <label for = "address">Address:</label>
      <input type = "text" name = "address" id = "address"/>
    </form>
  );
}

function Section ({title}) {
  return (
    <section className = "section">
      <div id = "header">
        <input type = "checkbox" />
        <h1>{title}</h1>
      </div>
      <div id = "content">
        <GeneralInfo />
      </div>
    </section>
  );
}

function Leftside({}) {
  return (
    <div className = "panel" id = "left-side">
      <Section title = "General Information" key = "1"/>
    </div>
  );
}

export default Leftside
