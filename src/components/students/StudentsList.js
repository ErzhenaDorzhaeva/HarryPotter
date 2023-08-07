import React from "react";
import StudentItem from "./StudentItem";
import PropTypes from "prop-types";

function StudentsList({ students }) {
  return (
    <div>
      {students.map((student) => {
        return <StudentItem student={student} key={student.id} />;
      })}
    </div>
  );
}

StudentsList.prototypes = {
  students: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StudentsList;
