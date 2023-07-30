import React from "react";
import { makeAutoObservable } from "mobx";
import { Gryf } from "../constants";
import { Rav } from "../constants";
import { Sly } from "../constants";
import { Huff } from "../constants";

class CharacterControl {
  students = [
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
  ];

  constructor() {
    makeAutoObservable(this);
  }

  inFaculty(id, fak) {
    this.students = this.students.map((student) => {
      if (student.id === id) {
        student.fak = fak;
      }
      return student;
    });
  }

  setDelete(id) {
    this.students = this.students.map((student) => {
      if (student.id === id) {
        student.fak = null;
      }
      return student;
    });
    console.log("gh", this.students, id);
  }
}
export default CharacterControl = new CharacterControl();
