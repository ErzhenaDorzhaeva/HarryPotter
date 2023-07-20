import React from "react";
import CharactersList from "./characters";

import ronald from "./foto/ronald.png";
import andromeda from "./foto/andromeda.png";
import newton from "./foto/newton.png";
import lov from "./foto/lov.png";
import notname from "./foto/notname.png";

import Hogwarts from "./faculty/Hogwarts";

function App() {
  const [students, setStudents] = React.useState([
    {
      id: 1,
      fak: "Gryffindor",
      foto: <img alt="1" className="img" src={ronald}></img>,
      name: "Ronald Weasley",
    },
    {
      id: 2,
      fak: "Slytherin",
      foto: <img alt="2" className="img" src={andromeda}></img>,
      name: "Andromeda Tonks (née Black)",
    },
    {
      id: 3,
      fak: "Hufflepuff",
      foto: <img alt="3" className="img" src={newton}></img>,
      name: "Newton Scamander",
    },
    {
      id: 4,
      fak: "Ravenclaw",
      foto: <img alt="5" className="img" src={lov}></img>,
      name: "Luna Lovegood",
    },
    {
      id: 5,
      fak: null,
      foto: <img alt="5" className="img" src={notname}></img>,
      name: "Tumen Dorzhaev",
    },
    {
      id: 6,
      fak: null,
      foto: <img alt="5" className="img" src={notname}></img>,
      name: "Bator Rybdylov",
    },
    {
      id: 7,
      fak: null,
      foto: <img alt="5" className="img" src={notname}></img>,
      name: "Erzhena Dorzhaeva",
    },
    {
      id: 8,
      fak: null,
      foto: <img alt="5" className="img" src={notname}></img>,
      name: "Dizhitma Rybdylova",
    },
  ]);

  function setHufflepuff(id) {
    setStudents(
      students.map((student) => {
        if (student.id === id) {
          student.fak = "Hufflepuff";
        }
        return student;
      })
    );
  }
  function setGryffindor(id) {
    setStudents(
      students.map((student) => {
        if (student.id === id) {
          student.fak = "Gryffindor";
        }
        return student;
      })
    );
  }
  function setRavenclaw(id) {
    setStudents(
      students.map((student) => {
        if (student.id === id) {
          student.fak = "Ravenclaw";
        }
        return student;
      })
    );
  }
  function setSlytherin(id) {
    setStudents(
      students.map((student) => {
        if (student.id === id) {
          student.fak = "Slytherin";
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
      <Hogwarts
        students={students.filter((student) => student.fak === "Hufflepuff")}
        type={"Hufflepuff"}
        onToggle={setDelete}
      />
      <Hogwarts
        students={students.filter((student) => student.fak === "Gryffindor")}
        type={"Gryffindor"}
        onToggle={setDelete}
      />
      <Hogwarts
        students={students.filter((student) => student.fak === "Ravenclaw")}
        type={"Ravenclaw"}
        onToggle={setDelete}
      />
      <Hogwarts
        students={students.filter((student) => student.fak === "Slytherin")}
        type={"Slytherin"}
        onToggle={setDelete}
      />
      <div style={{ margin: "50px" }}>
        <CharactersList
          students={students.filter((student) => student.fak === null)}
          onChange1={setHufflepuff}
          onChange2={setGryffindor}
          onChange3={setRavenclaw}
          onChange4={setSlytherin}
        />
      </div>
    </div>
  );
}

export default App;
