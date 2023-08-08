import React, { useState } from "react";
import PropTypes from "prop-types";
import StudentStore from "../../store/StudentStore";
import { observer } from "mobx-react-lite";
import { HousesNames } from "../../constants";
import Modal from "react-modal";
import ChangStudentModal from "./ChangStudentModal";

function StudentItem({ student }) {
  const { changeFaculty, getDelete } = StudentStore;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <span className="row">
      <span className="card">
        <span style={{ textAlign: "center" }} className="card.details">
          <h4>{student.name}</h4>
          <span>
            <img
              alt=""
              className="img"
              src={student.photo ? student.photo : "photo/notname.png"}
            ></img>
          </span>
          {HousesNames.map((name) => (
            <div key={name}>
              <button
                className="custom-btn btn-6"
                onClick={() => changeFaculty(student.id, name)}
              >
                {name}
              </button>
            </div>
          ))}
          <button className="custom-btn btn-6" onClick={openModal}>
            Change details
          </button>

          <Modal className="modal" isOpen={modalIsOpen}>
            <div>
              <ChangStudentModal
                onRequestClose={closeModal}
                student={student}
              />
            </div>
          </Modal>
          <button
            className="custom-btn btn-6"
            onClick={() => getDelete(student.id)}
          >
            Delete
          </button>
        </span>
      </span>
    </span>
  );
}

StudentItem.propTypes = {
  student: PropTypes.object.isRequired,
};

export default observer(StudentItem);
