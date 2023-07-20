import React from "react";
import Character1 from "./character1";

function CharactersList(props) {
  return (
    <div>
      {props.students.map((student) => {
        return (
          <Character1
            student={student}
            key={student.id}
            onChange1={props.onChange1}
            onChange2={props.onChange2}
            onChange3={props.onChange3}
            onChange4={props.onChange4}
          />
        );
      })}
    </div>
  );
}

export default CharactersList;
