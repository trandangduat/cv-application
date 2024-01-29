import '../styles/Rightside.css';
import moment from 'moment';

function GeneralInformation ({avatarSrc, name, labels, datas}) {
  return (
    <section className = "section" id = "general-info">
      <div 
        id = "avatar" 
        style = {{
          backgroundImage: `url(${avatarSrc})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <div id = "info">
        <h2 className = "name">{name}</h2>
        <div id = "contact">
          <ul id = "labels">
            {labels.map((label) => <li>{label}</li>)}
          </ul>
          <ul>
            {datas.map((info) => <li>{info}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Education (data) {
  return (
    data.filter(place => place.show === 1).map((place) => {
      return (
        <div className = "place" key = {place.id}>
          <div id = "time-range">
            {moment(place.from).format("MMM YYYY") + " - " + moment(place.to).format("MMM YYYY")}
          </div>
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
          <div id = "time-range">
            {moment(place.from).format("MMM YYYY") + " - " + moment(place.to).format("MMM YYYY")}
          </div>
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
      <div id = "header"><h2>{title}</h2></div> 
      <div id = "content">
        { content }
      </div>
    </section>
  );
}

function Rightside ({avatarSrc, fullName, contactInfos, educationalExperiences, practicalExperiences}) {  
  const contactLabels = ["Phone", "Email", "Address"];

  return (
    <div className = "panel preview" id = "right-side">
      <GeneralInformation avatarSrc = {avatarSrc} name = {fullName} labels = {contactLabels} datas = {contactInfos}/>
      <Section title = "Education" content = {Education(educationalExperiences)} />
      <Section title = "Practical Experience" content = {Practical(practicalExperiences)} />
    </div>
  );
}

export default Rightside 
