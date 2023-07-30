import React from "react";
import CharacterItem from "./CharacterItem";
import PropTypes from "prop-types";

function CharacterList({ students, inFaculty }) {
  return (
    <div>
      {students.map((student) => {
        return (
          <CharacterItem
            student={student}
            key={student.id}
            inFaculty={inFaculty}
          />
        );
      })}
    </div>
  );
}

CharacterList.prototypes = {
  students: PropTypes.arrayOf(PropTypes.object).isRequired,
  inFaculty: PropTypes.func.isRequired,
};

export default CharacterList;
