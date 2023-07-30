import React from "react";
import CharacterOneList from "./characterOneList";

// FIXME: "Characters" (мн-ое число) и "List"(подразумевает мн-ое число) думаю логично назвать "CharacterList" 
function CharactersList(props) {
  return (
    <div>
      {props.students.map((student) => {
        return (
          // FIXME: где на сайте этот "Hello"?
          (<h1>Hello</h1>),
          (
            // FIXME: думаю лучше назвать CharacterListItem или CharacterItem
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

// FIXME: не прописан тип пропса (в других компонентах описаны, значит и тут надо описать - однообразия!)

export default CharactersList;
