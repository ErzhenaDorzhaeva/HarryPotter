import React from "react";
import CharacterOneList from "./characterOneList";

function CharactersList(props) {
  return (
    <div>
      {props.students.map((student) => {
        return (
          (<h1>Hello</h1>),
          (
            <CharacterOneList
              student={student}
              key={student.id}
              inFaculty={props.inFaculty}
              fak={props.fak}
            />
          )
        );
      })}
    </div>
  );
}

export default CharactersList;
