import React from "react";
import PropTypes from "prop-types";

function FacultyStudent({ student, onToggle }) {
  return (
    <div key={student.id} style={{ alight: "center", margin: "1rem" }}>
      {student.name}
      <button onClick={onToggle.bind(null, student.id)}>Delete</button>
    </div>
  );
}

FacultyStudent.propTypes = {
  student: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default FacultyStudent;
