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

  checkFakFull = (fak) => {
    let studentsLenght = [];
    studentsLenght = this.students.filter((student) => student.fak === fak);
    if (studentsLenght.length > 2) {
      return alert("Дом полон, прием в данный дом будет закрыт");
    }
  };
  check = (fak) => {
    let contin = true;
    let studentsLenght = [];
    studentsLenght = this.students.filter((student) => student.fak === fak);
    if (studentsLenght.length > 2) {
      contin = false;
      return contin;
    }
    return contin;
  };

  changeFaculty = (id, fak) => {
    if (this.check(fak) === true) {
      this.students = this.students.map((student) => {
        if (student.id === id) {
          fak ? (student.fak = fak) : (student.fak = null);
        }
        return student;
      });
      this.checkFakFull(fak);
    } else {
      return alert("Выбирете другой дом");
    }
  };

  addStudent = (name, fak, onCancel) => {
    if (this.check(fak) === true) {
      const newStudent = {
        id: this.students.length + 1,
        fak: fak ? fak : null,
        photo: null,
        name: name,
      };
      this.students.push(newStudent);
      alert("Добавлен новый ученик");
      onCancel();
    } else {
      return alert("Выбирете другой дом, данный дом заполнен");
    }
  };
  changeStudent = (id, name, fak, onCancel) => {
    if (this.check(fak) === true) {
      this.students.map((student) => {
        if (student.id === id) {
          student.name = name;
          student.fak = fak ? fak : null;
        }
        return [student, onCancel()];
      });
    } else {
      return alert("Выбирете другой дом, данный дом заполнен");
    }
  };
  getDelete = (id) => {
    this.students = this.students.filter((student) => student.id !== id);
  };
}
export default StudentStore = new StudentStore();
