import React, { useState } from "react";
import PropTypes from "prop-types";
import StudentStore from "../../store/StudentStore";
import { observer } from "mobx-react-lite";
import { HousesNames } from "../../constants";
import Modal from "react-modal";
import ChangStudentItemModal from "./ChangStudentItemModal";

function StudentItem({ student }) {
  const { changeFaculty } = StudentStore;

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

          <Modal isOpen={modalIsOpen}>
            <div>
              <ChangStudentItemModal
                onRequestClose={closeModal}
                student={student}
              />
            </div>
          </Modal>
        </span>
      </span>
    </span>
  );
}

StudentItem.propTypes = {
  student: PropTypes.object.isRequired,
};

export default observer(StudentItem);
