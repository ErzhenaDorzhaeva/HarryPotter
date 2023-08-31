import React from "react";
import PropTypes from "prop-types";
import StudentStore from "../../store/StudentStore";
import { observer } from "mobx-react-lite";

function FacultyStudent({ student, i }) {
  const { changeFaculty } = StudentStore;

  if (i > 2) {
    alert("Дом заполнен");
  }

  if (i > 3) {
    changeFaculty(student.id, null);
    alert("Нужно выбрать другой факультет");
  }
  return (
    <div key={student.id} style={{ alight: "center", margin: "1rem" }}>
      {student.name}
      <button
        className="btn"
        id="target"
        onClick={() => changeFaculty(student.id)}
      >
        Delete
      </button>
    </div>
  );
}

FacultyStudent.propTypes = {
  student: PropTypes.object.isRequired,
};

export default observer(FacultyStudent);
