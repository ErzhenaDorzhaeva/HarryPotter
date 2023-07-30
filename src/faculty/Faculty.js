import React from "react";
import PropTypes from "prop-types";
import FacultyStudent from "./FacultyStudent";

import { Gryf, Rav, Sly, Huff } from "../constants";
function Faculty({ house, students, onToggle, type }) {
  return (
    <div className="flex-container">
      <div className="flex-item:nth-child(1)">
        {type === Huff && <span>{house.img}</span>}
        {type === Gryf && <h2 style={{ margin: "10px" }}>{house.text}</h2>}
        {/* FIXME: дублирование кода - можно сократить содержания компонента через условия - Это серьезное место, если не поняла то в созвон */}
        {type === Gryf &&
          students.map((student) => {
            return (
              <FacultyStudent
                student={student}
                key={student.id}
                onToggle={onToggle}
              />
            );
          })}
        {type === Rav && <span>{house.img}</span>}
        {type === Sly && <h2 style={{ margin: "10px" }}>{house.text}</h2>}
        {type === Sly &&
          students.map((student) => {
            return (
              <FacultyStudent
                student={student}
                key={student.id}
                onToggle={onToggle}
              />
            );
          })}
      </div>

      <div className="flex-item:nth-child(2)">
        {type === Huff && <h2 style={{ margin: "10px" }}>{house.text}</h2>}
        {type === Huff &&
          students.map((student) => {
            return (
              <FacultyStudent
                student={student}
                key={student.id}
                onToggle={onToggle}
              />
            );
          })}
        {type === Gryf && <span>{house.img}</span>}
        {type === Rav && <h2 style={{ margin: "10px" }}>{house.text}</h2>}
        {type === Rav &&
          students.map((student) => {
            return (
              <FacultyStudent
                student={student}
                key={student.id}
                onToggle={onToggle}
              />
            );
          })}
        {type === Sly && <span>{house.img}</span>}
      </div>
    </div>
  );
}

Faculty.propTypes = {
  students: PropTypes.arrayOf(PropTypes.object).isRequired,
  house: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Faculty;
