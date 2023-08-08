import React from "react";
import PropTypes from "prop-types";
import StudentStore from "../../store/StudentStore";
import { observer } from "mobx-react-lite";

function FacultyStudent({ student }) {
  const { changeFaculty } = StudentStore;

  return (
    <div key={student.id} style={{ alight: "center", margin: "1rem" }}>
      {student.name}
      <button onClick={() => changeFaculty(student.id)}>Delete</button>
    </div>
  );
}

FacultyStudent.propTypes = {
  student: PropTypes.object.isRequired,
};

export default observer(FacultyStudent);
