import React, { useState } from "react";
import StudentStore from "../../store/StudentStore";
import { observer } from "mobx-react-lite";
import { Rav, Huff, Sly, Gryf } from "../../constants";

function AddStudentModal({ onRequestClose }) {
  const { abbStudent } = StudentStore;
  const [name, setName] = useState("");
  const [fak, setFak] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    if (name.trim()) {
      abbStudent(name, fak);
      onRequestClose();
    }
  }
  function getClose() {
    onRequestClose();
  }
  return (
    <div className="modal-body">
      <form onSubmit={submitHandler}>
        <div>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <select onChange={(event) => setFak(event.target.value)}>
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
export default observer(AddStudentModal);
