import { useState } from 'react'

function GeneralInformation (props) {
  return (
    <div id = "general-info">
      <div id = "avatar"></div>
      <div id = "info">
        <h1 className = "name">YOUR NAME</h1>
        <div id = "contact">
          <ul id = "labels">
            {props.labels.map((label) => <li>{label}</li>)}
          </ul>
          <ul>
            {props.data.map((info) => <li>{info}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Education (data) {
  return (
    data.map((place) => {
      return (
        <div className = "place" key = {place.id}>
          <div id = "time-range">{place.from + " - " + place.to}</div>
          <div>
            <p id = "place-name">{place.school}</p>
            <p id = "role">{place.role}</p>
          </div>
        </div>
      );
    })
  );
}

function Practical (data) {
  return (
    data.map((place) => {
      return (
        <div className = "place" key = {place.id}>
          <div id = "time-range">{place.from + " - " + place.to}</div>
          <div>
            <p id = "place-name">{place.company}</p>
            <p id = "role">{place.position + " " + place.role}</p>
          </div>
        </div>
      );
    })
  );
}

function Section (props) {
  return (
    <div className = "section">
      <div id = "header"><h1>{props.title}</h1></div> 
      <div id = "content">
        { props.content }
      </div>
    </div>
  );
}

function Rightside() {
  const contactLabels = ["Phone", "Email", "Address"];
  const [contactInfos, setContactInfos] = useState(["0123456789", "dummy@text.com", "Hanoi, Vietnam"]);
  const [educationalExperiences, setEducationalExperience] = useState([
    {
      "from": "2020",
      "to": "2023",
      "role": "Student",
      "school": "Nguyen Hue High School for Gifted Student",
      "id": "1",
    },
    
    {
      "from": "Sep 2023",
      "to": "Now",
      "role": "Student",
      "school": "VNU University of Engineering and Technology",
      "id": "2",
    },
  ]);
  const [practicalExperiences, setPracticalExperience] = useState([
    {
      "from": "Dec 2023",
      "to": "Sep 2024",
      "role": "Front-End Developer",
      "position": "Junior",
      "company": "Ligma Company",
      "id": "1",
    },
    {
      "from": "Sep 2024",
      "to": "Now",
      "role": "Full-Stack Developer",
      "position": "",
      "company": "Ball Company",
      "id": "2",
    },
  ]);

  return (
    <div className = "panel preview" id = "right-side">
      <GeneralInformation labels = {contactLabels} data = {contactInfos}/>
      <Section title = "Education" content = {Education(educationalExperiences)} />
      <Section title = "Practical Experience" content = {Practical(practicalExperiences)} />
    </div>
  );
}

export default Rightside 
