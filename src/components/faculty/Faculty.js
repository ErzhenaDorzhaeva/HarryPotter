import React from "react";
import PropTypes from "prop-types";
import FacultyStudent from "./FacultyStudent";
import { Divider } from "antd";
function Faculty({ house, students, index, open, showModal }) {
  return (
    <>
      <div className="flex-container border">
        {index % 2 > 0 && (
          <div className="flex-item:nth-child(1)">
            <span>
              <img className="img2" alt="" src={house.img}></img>
            </span>
          </div>
        )}
        <div className="flex-item:nth-child(2)">
          <h2 style={{ margin: "10px" }}>{house.text}</h2>
          {students.map((student) => {
            return (
              <FacultyStudent
                student={student}
                key={student.id}
                open={open}
                showModal={showModal}
              />
            );
          })}
        </div>

        {!(index % 2) && (
          <div className="flex-item:nth-child(3)">
            <span>
              <img className="img2" alt="" src={house.img}></img>
            </span>
          </div>
        )}
      </div>
      <Divider />
    </>
  );
}

Faculty.propTypes = {
  students: PropTypes.arrayOf(PropTypes.object).isRequired,
  house: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Faculty;
