import React from "react";
import CharactersList from "./charactersList";
import Faculty from "./faculty/Faculty";

import { Gryf } from "./constants";
import { Rav } from "./constants";
import { Sly } from "./constants";
import { Huff } from "./constants";

function Home() {
  const [students, setStudents] = React.useState([
    {
      id: 1,
      fak: Gryf,
      photo: <img alt="1" className="img" src="photo/ronald.png"></img>,
      name: "Ronald Weasley",
    },
    {
      id: 2,
      fak: Sly,
      photo: <img alt="2" className="img" src="photo/andromeda.png"></img>,
      name: "Andromeda Tonks (née Black)",
    },
    {
      id: 3,
      fak: Huff,
      photo: <img alt="3" className="img" src="photo/newton.png"></img>,
      name: "Newton Scamander",
    },
    {
      id: 4,
      fak: Rav,
      photo: <img alt="4" className="img" src="photo/lov.png"></img>,
      name: "Luna Lovegood",
    },
    {
      id: 5,
      fak: null,
      photo: <img alt="5" className="img" src="photo/notname.png"></img>,
      name: "Tumen Dorzhaev",
    },
    {
      id: 6,
      fak: null,
      photo: <img alt="6" className="img" src="photo/notname.png"></img>,
      name: "Bator Rybdylov",
    },
    {
      id: 7,
      fak: null,
      photo: <img alt="7" className="img" src="photo/notname.png"></img>,
      name: "Erzhena Dorzhaeva",
    },
    {
      id: 8,
      fak: null,
      photo: <img alt="8" className="img" src="photo/notname.png"></img>,
      name: "Dizhitma Rybdylova",
    },
  ]);

  const [houses] = React.useState([
    {
      id: 1,
      name: Huff,
      img: (
        <img className="img2" alt="9" src="/faculty_photo/Hufflepuff.png"></img>
      ),
      text: 'Hufflepuff is one of the faculties of the Hogwarts school of magic and witchcraft. Read the name as "Hufflepuff" and you will imagine how it sounds in English',
    },
    {
      id: 2,
      name: Gryf,
      img: (
        <img
          className="img2"
          alt="10"
          src="/faculty_photo/Gryffindor.png"
        ></img>
      ),
      text: "The house of Godric Gryffindor has been respected by the whole world for ten centuries, and I will not allow you to defame this name in one evening, behaving like ill-mannered, unthinking rude",
    },
    {
      id: 3,
      name: Rav,
      img: (
        <img className="img2" alt="11" src="/faculty_photo/Ravenclaw.png"></img>
      ),
      text: 'In the English original, the faculty is called "Ravenclaw", which translates as "ravens claw" (hence the translation Ravenclaw). A popular Kogtevran proverb says "wit beyond measure is mans greatest treasure',
    },
    {
      id: 4,
      name: Sly,
      img: (
        <img
          className="img2"
          alt="12"
          src="/faculty_photo/Slytherinm.png"
        ></img>
      ),
      text: "Distinctive qualities of the students of this faculty : cunning, npm install eslint-plugin-react --save-devthe ability to achieve their goal in any way. They are no more stupid than the Ravenclaws, but are distinguished by their wit and frequent crossing of the boundaries of morality, which from the very foundation of Hogwarts secured a bad reputation for Slytherin",
    },
  ]);

  const [fak] = React.useState("");

  function inFaculty(id, fak) {
    setStudents(
      students.map((student) => {
        if (student.id === id) {
          student.fak = fak;
        }
        return student;
      })
    );
  }

  function setDelete(id) {
    setStudents(
      students.map((student) => {
        if (student.id === id) {
          student.fak = null;
        }
        return student;
      })
    );
  }

  return (
    <div className="border">
      <Faculty
        students={students.filter((student) => student.fak === Huff)}
        type={Huff}
        onToggle={setDelete}
        houses={houses.filter((house) => house.name === Huff)}
      />
      <Faculty
        students={students.filter((student) => student.fak === Gryf)}
        type={Gryf}
        onToggle={setDelete}
        houses={houses.filter((house) => house.name === Gryf)}
      />
      <Faculty
        students={students.filter((student) => student.fak === Rav)}
        type={Rav}
        onToggle={setDelete}
        houses={houses.filter((house) => house.name === Rav)}
      />
      <Faculty
        students={students.filter((student) => student.fak === Sly)}
        type={Sly}
        onToggle={setDelete}
        houses={houses.filter((house) => house.name === Sly)}
      />
      <div style={{ margin: "50px" }}>
        <CharactersList
          students={students.filter((student) => student.fak === null)}
          inFaculty={inFaculty}
          fak={fak}
        />
      </div>
      <div></div>
    </div>
  );
}

export default Home;
