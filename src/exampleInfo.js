const exampleGeneralInfo = ["0123456789", "dummy@text.com", "Hanoi, Vietnam"];
const exampleEducationalExperiences = [
  {
    "from": "2020",
    "to": "2023",
    "role": "Student",
    "school": "Nguyen Hue High School for Gifted Student",
    "id": crypto.randomUUID(),
    "show": 1,
  },
  
  {
    "from": "Sep 2023",
    "to": "Now",
    "role": "Student",
    "school": "VNU University of Engineering and Technology",
    "id": crypto.randomUUID(),
    "show": 1,
  },
];
const examplePracticalExperiences = [
  {
    "from": "Dec 2023",
    "to": "Sep 2024",
    "role": "Front-End Developer",
    "position": "Junior",
    "company": "Ligma Company",
    "id": crypto.randomUUID(),
    "show": 1,
  },
  {
    "from": "Sep 2024",
    "to": "Now",
    "role": "Full-Stack Developer",
    "position": "",
    "company": "Ball Company",
    "id": crypto.randomUUID(),
    "show": 1,
  },
];

export {
  exampleGeneralInfo,
  exampleEducationalExperiences,
  examplePracticalExperiences,
};
