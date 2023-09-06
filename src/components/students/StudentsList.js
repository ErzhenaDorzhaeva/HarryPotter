import React from "react";
import StudentItem from "./StudentItem";
import PropTypes from "prop-types";

function StudentsList({ students, open, showModal }) {
  return (
    <div>
      {students.length > 0 ? (
        students.map((student) => {
          return (
            <StudentItem
              student={student}
              key={student.id}
              open={open}
              showModal={showModal}
            />
          );
        })
      ) : (
        <h4>Студентов не осталось</h4>
      )}
    </div>
  );
}

StudentsList.prototypes = {
  students: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StudentsList;
