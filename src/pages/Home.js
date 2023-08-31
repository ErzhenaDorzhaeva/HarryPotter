import React, { useState } from "react";
import StudentsList from "../components/students/StudentsList";
import Faculty from "../components/faculty/Faculty";
import FacultyStore from "../store/FacultyStore";
import { observer } from "mobx-react-lite";
import StudentStore from "../store/StudentStore";
import Modal from "react-modal";
import ChangStudentModal from "../components/students/ChangStudentModal";
import { HousesNames } from "../constants";

function Home() {
  const { houses } = FacultyStore;
  const { students } = StudentStore;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  // let array = [1, 8, 5, 7];
  // // array.forEach((arr) => {
  // //   console.log(arr);
  // // });

  // let array2 = array.map((arr) => arr * 2);
  // console.log(array2);

  return (
    <div className="border">
      {HousesNames.map((name, index) => (
        <Faculty
          key={name}
          students={students.filter((student) => student.fak === name)}
          house={houses.find((house) => house.name === name)}
          index={index + 1}
        />
      ))}

      <div style={{ margin: "50px" }}>
        <StudentsList
          students={students.filter((student) => student.fak === null)}
        />
      </div>
      <div style={{ margin: "50px" }}>
        <button className="custom-btn btn-6" onClick={openModal}>
          Add Student
        </button>
        <Modal className="modal" isOpen={modalIsOpen}>
          <ChangStudentModal onRequestClose={closeModal} student={""} />
        </Modal>
      </div>
    </div>
  );
}

export default observer(Home);
