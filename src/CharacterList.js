import React from "react";
import CharacterItem from "./CharacterItem";
import PropTypes from "prop-types";

function CharacterList({ students }) {
  return (
    <div>
      {students.map((student) => {
        return <CharacterItem student={student} key={student.id} />;
      })}
    </div>
  );
}

CharacterList.prototypes = {
  students: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CharacterList;
