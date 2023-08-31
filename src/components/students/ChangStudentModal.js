import React, { useState } from "react";
import StudentStore from "../../store/StudentStore";
import { observer } from "mobx-react-lite";
import { Rav, Huff, Sly, Gryf } from "../../constants";
import PropTypes from "prop-types";

function ChangStudentModal({ onRequestClose, student }) {
  const { changeStudent, addStudent } = StudentStore;
  const checkName = student.name ? student.name : "";
  const checkFak = student.fak ? student.fak : "";
  const [name, setName] = useState(checkName);
  const [fak, setFak] = useState(checkFak);

  function submitHandler(event) {
    const id = student.id;
    event.preventDefault();

    if (name.trim()) {
      student.name ? changeStudent(id, name, fak) : addStudent(name, fak);
      onRequestClose();
    }
  }

  function getClose() {
    onRequestClose();
  }

  return (
    <div className="modal-body">
      <form onSubmit={submitHandler}>
        <div style={{ margin: "10px" }}>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <select value={fak} onChange={(event) => setFak(event.target.value)}>
            <option value="">not selected</option>
            <option value={Huff}>{Huff}</option>
            <option value={Rav}>{Rav}</option>
            <option value={Sly}>{Sly}</option>
            <option value={Gryf}>{Gryf}</option>
          </select>
        </div>
        <div>
          <button
            className="custom-btn btn-6"
            style={{ margin: "10px" }}
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
      <div>
        <button
          className="custom-btn btn-6"
          style={{ margin: "10px" }}
          onClick={getClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
ChangStudentModal.propTypes = {
  student: PropTypes.object.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};
export default observer(ChangStudentModal);
