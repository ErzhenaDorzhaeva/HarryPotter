import React from "react";
import PropTypes from "prop-types";
import StudentStore from "./store/StudentStore";
import { observer } from "mobx-react-lite";
import { HousesNames } from "./constants";

function CharacterItem({ student }) {
  const { changeFaculty } = StudentStore;

  return (
    <span className="row">
      <span className="card">
        <span style={{ textAlign: "center" }} className="card.details">
          <h4>{student.name}</h4>
          <span>{student.photo}</span>
          {HousesNames.map((name) => (
            <div key={name}>
              <button
                className="custom-btn btn-6"
                onClick={() => changeFaculty(student.id, name)}
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
};

export default observer(CharacterItem);
