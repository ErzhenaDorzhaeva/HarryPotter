import React from "react";
import PropTypes from "prop-types";
import FacultStudents from "./FacultStudents";

import { Gryf } from "../constants";
import { Rav } from "../constants";
import { Sly } from "../constants";
import { Huff } from "../constants";

import HufflepuffH from "../faculty_foto/Hufflepuff.png";
import GryffindorH from "../faculty_foto/Gryffindor.png";
import SlytherinH from "../faculty_foto/Slytherin.png";
import RavenclawH from "../faculty_foto/Ravenclaw.png";

function Hogwarts(props) {
  return (
    <div className="flex-container">
      <div className="flex-item:nth-child(1)">
        {props.type === Huff && (
          <img className="img2" alt="10" src={HufflepuffH}></img>
        )}
        {props.type === Gryf && (
          <h2 style={{ margin: "10px" }}>
            The house of Godric Gryffindor has been respected by the whole world
            for ten centuries, and I will not allow you to defame this name in
            one evening, behaving like ill-mannered, unthinking rude
          </h2>
        )}
        {props.type === Gryf &&
          props.students.map((student) => {
            return (
              <FacultStudents
                student={student}
                key={student.id}
                onToggle={props.onToggle}
              />
            );
          })}
        {props.type === Rav && (
          <img className="img2" alt="11" src={RavenclawH}></img>
        )}
        {props.type === Sly && (
          <h2 style={{ margin: "10px" }}>
            Distinctive qualities of the students of this faculty : cunning, npm
            install eslint-plugin-react --save-devthe ability to achieve their
            goal in any way. They are no more stupid than the Ravenclaws, but
            are distinguished by their wit and frequent crossing of the
            boundaries of morality, which from the very foundation of Hogwarts
            secured a bad reputation for Slytherin
          </h2>
        )}
        {props.type === Sly &&
          props.students.map((student) => {
            return (
              <FacultStudents
                student={student}
                key={student.id}
                onToggle={props.onToggle}
              />
            );
          })}
      </div>

      <div className="flex-item:nth-child(2)">
        {props.type === Huff && (
          <h2 style={{ margin: "10px" }}>
            Hufflepuff is one of the faculties of the Hogwarts school of magic
            and witchcraft. Read the name as "Hufflepuff" and you will imagine
            how it sounds in English.
          </h2>
        )}
        {props.type === Huff &&
          props.students.map((student) => {
            return (
              <FacultStudents
                student={student}
                key={student.id}
                onToggle={props.onToggle}
              />
            );
          })}
        {props.type === Gryf && (
          <img className="img2" alt="12" src={GryffindorH}></img>
        )}
        {props.type === Rav && (
          <h2 style={{ margin: "10px" }}>
            {" "}
            In the English original, the faculty is called Ravenclaw, which
            translates as "raven's claw" (hence the translation "Ravenclaw"). A
            popular Kogtevran proverb says "wit beyond measure is man's greatest
            treasure "
          </h2>
        )}
        {props.type === Rav &&
          props.students.map((student) => {
            return (
              <FacultStudents
                student={student}
                key={student.id}
                onToggle={props.onToggle}
              />
            );
          })}
        {props.type === "Slytherin" && (
          <img className="img2" alt="13" src={SlytherinH}></img>
        )}
      </div>
    </div>
  );
}

Hogwarts.propTypes = {
  students: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Hogwarts;
