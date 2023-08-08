import React from "react";
import PropTypes from "prop-types";
import FacultyStudent from "./FacultyStudent";

function Faculty({ house, students, index }) {
  return (
    <div className="flex-container border">
      {index % 2 > 0 && (
        <div className="flex-item:nth-child(1)">
          <span>{house.img}</span>
        </div>
      )}

      <div className="flex-item:nth-child(2)">
        <h2 style={{ margin: "10px" }}>{house.text}</h2>
        {students.map((student) => {
          return <FacultyStudent student={student} key={student.id} />;
        })}
      </div>

      {!(index % 2) && (
        <div className="flex-item:nth-child(3)">
          <span>{house.img}</span>
        </div>
      )}
    </div>
  );
}

Faculty.propTypes = {
  students: PropTypes.arrayOf(PropTypes.object).isRequired,
  house: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Faculty;
