import React from "react";
import PropTypes from "prop-types";

function FacultStudents({ student, onToggle }) {
  return (
    <div key={student.id} style={{ alight: "center", margin: "1rem" }}>
      {student.name}
      <button onClick={onToggle.bind(null, student.id)}> Delete</button>
    </div>
  );
}

FacultStudents.propTypes = {
  student: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FacultStudents;
