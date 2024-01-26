import { useState } from 'react'

function GeneralInformation ({name, labels, datas}) {
  return (
    <div id = "general-info">
      <div id = "avatar"></div>
      <div id = "info">
        <h1 className = "name">{name}</h1>
        <div id = "contact">
          <ul id = "labels">
            {labels.map((label) => <li>{label}</li>)}
          </ul>
          <ul>
            {datas.map((info) => <li>{info}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Education (data) {
  return (
    data.filter(place => place.show === 1).map((place) => {
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
    data.filter(place => place.show === 1).map((place) => {
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

function Section ({title, content}) {
  return (
    <section className = "section">
      <div id = "header"><h1>{title}</h1></div> 
      <div id = "content">
        { content }
      </div>
    </section>
  );
}

function Rightside ({fullName, contactInfos, educationalExperiences, practicalExperiences}) {  
  const contactLabels = ["Phone", "Email", "Address"];

  return (
    <div className = "panel preview" id = "right-side">
      <GeneralInformation name = {fullName} labels = {contactLabels} datas = {contactInfos}/>
      <Section title = "Education" content = {Education(educationalExperiences)} />
      <Section title = "Practical Experience" content = {Practical(practicalExperiences)} />
    </div>
  );
}

export default Rightside 
