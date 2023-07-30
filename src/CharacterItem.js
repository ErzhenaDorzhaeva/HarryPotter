import React from "react";
import PropTypes from "prop-types";

import { Gryf, Rav, Sly, Huff } from "../constants";

function CharacterItem({ student, inFaculty }) {
  return (
    <span className="row">
      <span className="card">
        <span style={{ textAlign: "center" }} className="card.details">
          <h4>{student.name}</h4>
          <span>{student.photo}</span>
          {/* FIXME: кнопка повторяется 4 раза с разными параметрами - нужно сделать через map (чтобы кнопка использовалась один раз) */}
          <div>
            <button
              className="custom-btn btn-6"
              onClick={() => inFaculty(student.id, Huff)}
            >
              {Huff}
            </button>
          </div>
          <div>
            <button
              className="custom-btn btn-6"
              onClick={() => inFaculty(student.id, Gryf)}
            >
              {Gryf}
            </button>
          </div>
          <div>
            <button
              className="custom-btn btn-6"
              onClick={() => inFaculty(student.id, Rav)}
            >
              {Rav}
            </button>
          </div>
          <div>
            <button
              className="custom-btn btn-6"
              onClick={() => inFaculty(student.id, Sly)}
            >
              {Sly}
            </button>
          </div>
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
