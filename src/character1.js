import React from "react";
import PropTypes from "prop-types";

function Character1({ student, onChange1, onChange2, onChange3, onChange4 }) {
  return (
    <span className="row">
      <span className="card">
        <span style={{ textAlign: "center" }} className="card.details">
          <h4>{student.name}</h4>
          <span> {student.foto} </span>
          <div>
            <button
              className="custom-btn btn-6"
              onClick={onChange1.bind(null, student.id)}
            >
              Hufflepuff
            </button>
          </div>
          <div>
            <button
              className="custom-btn btn-6"
              onClick={onChange2.bind(null, student.id)}
            >
              Gryffindor
            </button>
          </div>
          <div>
            <button
              className="custom-btn btn-6"
              onClick={onChange3.bind(null, student.id)}
            >
              Ravenclaw
            </button>
          </div>
          <div>
            <button
              className="custom-btn btn-6"
              onClick={onChange4.bind(null, student.id)}
            >
              Slytherin
            </button>
          </div>
        </span>
      </span>
    </span>
  );
}

Character1.propTypes = {
  student: PropTypes.object.isRequired,
};

export default Character1;
