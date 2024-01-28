const exampleGeneralInfo = ["0123456789", "dummy@text.com", "Hanoi, Vietnam"];
const exampleEducationalExperiences = [
  {
    "from": "2020-09-01",
    "to": "2023-05-01",
    "role": "Student",
    "school": "Nguyen Hue High School for Gifted Student",
    "id": crypto.randomUUID(),
    "show": 1,
  },
  
  {
    "from": "2023-09-01",
    "to": "2023-05-15",
    "role": "Student",
    "school": "VNU University of Engineering and Technology",
    "id": crypto.randomUUID(),
    "show": 1,
  },
];
const examplePracticalExperiences = [
  {
    "from": "2023-12-01",
    "to": "2024-09-01",
    "role": "Front-End Developer",
    "position": "Junior",
    "company": "Ligma Company",
    "id": crypto.randomUUID(),
    "show": 1,
  },
  {
    "from": "2024-12-01",
    "to": "2024-01-28",
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
