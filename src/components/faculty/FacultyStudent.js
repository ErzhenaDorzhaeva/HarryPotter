import React from "react";
import PropTypes from "prop-types";
import StudentStore from "../../store/StudentStore";
import { observer } from "mobx-react-lite";
import { DeleteOutlined } from "@ant-design/icons";
function FacultyStudent({ student, i }) {
  const { changeFaculty } = StudentStore;
  if (i === 3) {
    alert("Дом полон");
  }
  return (
    <div key={student.id} style={{ alight: "center", margin: "1rem" }}>
      {student.name}
      <DeleteOutlined
        style={{ margin: "1rem" }}
        onClick={() => changeFaculty(student.id)}
      />
    </div>
  );
}

FacultyStudent.propTypes = {
  student: PropTypes.object.isRequired,
};

export default observer(FacultyStudent);
