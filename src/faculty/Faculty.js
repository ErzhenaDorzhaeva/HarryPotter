import React from "react";
import PropTypes from "prop-types";
import FacultStudents from "./FacultStudents";

import { Gryf } from "../constants";
import { Rav } from "../constants";
import { Sly } from "../constants";
import { Huff } from "../constants";

function Faculty(props) {
  return (
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
  houses: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Faculty;
