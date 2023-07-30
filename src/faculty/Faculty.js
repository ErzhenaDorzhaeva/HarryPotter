import React from "react";
import PropTypes from "prop-types";
import FacultyStudent from "./FacultyStudent";

import { Gryf, Rav, Sly, Huff } from "../constants";
function Faculty({ house, students, onToggle, type }) {
  return (
    <div className="flex-container border">
      {(type === Gryf || type === Sly) && (
        <div className="flex-item:nth-child(1)">
          <span>{house.img}</span>
        </div>
      )}

      <div className="flex-item:nth-child(2)">
        <h2 style={{ margin: "10px" }}>{house.text}</h2>
        {students.map((student) => {
          return (
            <FacultyStudent
              student={student}
              key={student.id}
              onToggle={onToggle}
            />
          );
        })}
      </div>

      {(type === Huff || type === Rav) && (
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
};

export default Faculty;
