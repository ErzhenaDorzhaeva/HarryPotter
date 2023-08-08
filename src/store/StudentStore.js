import { makeAutoObservable } from "mobx";
import { Gryf, Rav, Huff, Sly } from "../constants";
class StudentStore {
  students = [
    {
      id: 1,
      fak: Gryf,
      photo: "photo/ronald.png",
      name: "Ronald Weasley",
    },
    {
      id: 2,
      fak: Sly,
      photo: "photo/andromeda.png",
      name: "Andromeda Tonks (née Black)",
    },
    {
      id: 3,
      fak: Huff,
      photo: "photo/newton.png",
      name: "Newton Scamander",
    },
    {
      id: 4,
      fak: Rav,
      photo: "photo/lov.png",
      name: "Luna Lovegood",
    },
    {
      id: 5,
      fak: null,
      photo: null,
      name: "Tumen Dorzhaev",
    },
    {
      id: 6,
      fak: null,
      photo: null,
      name: "Bator Rybdylov",
    },
    {
      id: 7,
      fak: null,
      photo: null,
      name: "Erzhena Dorzhaeva",
    },
    {
      id: 8,
      fak: null,
      photo: null,
      name: "Dizhitma Rybdylova",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  changeFaculty = (id, fak) => {
    this.students = this.students.map((student) => {
      if (student.id === id) {
        fak ? (student.fak = fak) : (student.fak = null);
      }
      return student;
    });
  };

  abbStudent = (name, fak) => {
    const newStudent = {
      id: this.students.length + 1,
      fak: fak ? fak : null,
      photo: null,
      name: name,
    };
    console.log("newStudent", newStudent);
    this.students.push(newStudent);
  };
  changeStudentItem = (id, name, fak) => {
    this.students.map((student) => {
      if (student.id === id) {
        student.name = name;
        student.fak = fak ? fak : null;
      }
      return student;
    });
  };
}
export default StudentStore = new StudentStore();
