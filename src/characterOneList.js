import React from "react";
import PropTypes from "prop-types";

import { Gryf } from "./constants";
import { Rav } from "./constants";
import { Sly } from "./constants";
import { Huff } from "./constants";

function CharacterOneList({ student, inFaculty, fak }) {
  return (
    <span className="row">
      <span className="card">
        <span style={{ textAlign: "center" }} className="card.details">
          <h4>{student.name}</h4>
          <span> {student.photo} </span>
          <div>
            <button
              className="custom-btn btn-6"
              onClick={() => inFaculty(student.id, Huff)}
            >
              Hufflepuff
            </button>
          </div>
          <div>
            <button
              className="custom-btn btn-6"
              onClick={() => inFaculty(student.id, Gryf)}
            >
              Gryffindor
            </button>
          </div>
          <div>
            <button
              className="custom-btn btn-6"
              onClick={() => inFaculty(student.id, Rav)}
            >
              Ravenclaw
            </button>
          </div>
          <div>
            <button
              className="custom-btn btn-6"
              onClick={() => inFacultygit add .(student.id, Sly)}
            >
              Slytherin
            </button>
          </div>
        </span>
      </span>
    </span>
  );
}

CharacterOneList.propTypes = {
  student: PropTypes.object.isRequired,
};

export default CharacterOneList;
