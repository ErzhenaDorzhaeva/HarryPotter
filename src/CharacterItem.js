import React from "react";
import PropTypes from "prop-types";

import { HousesNames } from "./constants";

function CharacterItem({ student, inFaculty }) {
  return (
    <span className="row">
      <span className="card">
        <span style={{ textAlign: "center" }} className="card.details">
          <h4>{student.name}</h4>
          <span>{student.photo}</span>
          {HousesNames.map((name) => (
            <div>
              <button
                className="custom-btn btn-6"
                onClick={() => inFaculty(student.id, name)}
              >
                {name}
              </button>
            </div>
          ))}
        </span>
      </span>
    </span>
  );
}

CharacterItem.propTypes = {
  student: PropTypes.object.isRequired,
  inFaculty: PropTypes.func.isRequired,
};

export default CharacterItem;
