import React, { useState } from "react";
import StudentsList from "../components/students/StudentsList";
import Faculty from "../components/faculty/Faculty";
import FacultyStore from "../store/FacultyStore";
import { observer } from "mobx-react-lite";
import StudentStore from "../store/StudentStore";
import AddStudentModal from "../components/students/AddStudentModal";
import Modal from "react-modal";

import { HousesNames } from "../constants";

function Home() {
  const { houses } = FacultyStore;
  const { students, setDelete } = StudentStore;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="border">
      {HousesNames.map((name, index) => (
        <Faculty
          key={name}
          students={students.filter((student) => student.fak === name)}
          onToggle={setDelete}
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
        <Modal isOpen={modalIsOpen}>
          <AddStudentModal onRequestClose={closeModal} />
        </Modal>
      </div>
    </div>
  );
}

export default observer(Home);
