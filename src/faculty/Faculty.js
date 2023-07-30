import React from "react";
import PropTypes from "prop-types";
import FacultStudents from "./FacultStudents";

// FIXME: тут можно описать в одной строке, так как берутся данные из одного компонента
// import { Gryf, Rav, Sly, Huff } from "../constants";
import { Gryf } from "../constants";
import { Rav } from "../constants";
import { Sly } from "../constants";
import { Huff } from "../constants";

function Faculty(props) {
  return (
    // FIXME: Не отображает картинку Слизерина
    <div className="flex-container">
      <div className="flex-item:nth-child(1)">
        {props.type === Huff &&
          props.houses.map((house) => {
            return <span>{house.img}</span>;
          })}
        {props.type === Gryf &&
          props.houses.map((house) => {
            return <h2 style={{ margin: "10px" }}>{house.text}</h2>;
          })}
        {/* FIXME: дублирование кода - можно сократить содержания компонента через условия - Это серьезное место, если не поняла то в созвон */}
        {props.type === Gryf &&
          props.students.map((student) => {
            return (
              // FIXME: лучше называть грамматически верно "FacultyStudents" ну либо сокращать наименование до удобного варианта (FacStudents)
              // FIXME: название в мн-ом числе, нужно в единственном
              <FacultStudents
                student={student}
                key={student.id}
                onToggle={props.onToggle}
              />
            );
          })}
        {props.type === Rav &&
          props.houses.map((house) => {
            return <span>{house.img}</span>;
          })}
        {props.type === Sly &&
          props.houses.map((house) => {
            return <h2 style={{ margin: "10px" }}>{house.text}</h2>;
          })}
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
        {props.type === Huff &&
          props.houses.map((house) => {
            return <h2 style={{ margin: "10px" }}>{house.text}</h2>;
          })}
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
        {props.type === Gryf &&
          props.houses.map((house) => {
            return <span>{house.img}</span>;
          })}
        {props.type === Rav &&
          props.houses.map((house) => {
            return <h2 style={{ margin: "10px" }}>{house.text}</h2>;
          })}
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
        {props.type === Sly &&
          props.houses.map((house) => {
            return <span>{house.img}</span>;
          })}
      </div>
    </div>
  );
}

Faculty.propTypes = {
  students: PropTypes.arrayOf(PropTypes.object).isRequired,
  // FIXME: houses по логике не должен быть списком, а должен быть объектом
  houses: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Faculty;
