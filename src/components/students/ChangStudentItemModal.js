import React, { useState } from "react";
import StudentStore from "../../store/StudentStore";
import { observer } from "mobx-react-lite";
import { Rav, Huff, Sly, Gryf } from "../../constants";

function ChangStudentItemModal({ onRequestClose, student }) {
  const { changeStudentItem } = StudentStore;
  const [name, setName] = useState(student.name);
  const [fak, setFak] = useState(student.fak);

  function submitHandler(event) {
    const id = student.id;
    event.preventDefault();
    if (name.trim()) {
      changeStudentItem(id, name, fak);
      onRequestClose();
    }
  }
  function getClose() {
    onRequestClose();
  }
  return (
    <div>
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
export default observer(ChangStudentItemModal);
