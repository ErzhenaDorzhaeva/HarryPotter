import React from "react";
import PropTypes from "prop-types";
import StudentStore from "../../store/StudentStore";
import { observer } from "mobx-react-lite";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
function FacultyStudent({ student, open, showModal }) {
  const { changeFaculty } = StudentStore;
  return (
    <div key={student.id} style={{ alight: "center", margin: "1rem" }}>
      {student.name}
      <EditOutlined
        style={{
          marginLeft: "10px",
        }}
        onClick={showModal}
      />
      <DeleteOutlined
        style={{ marginLeft: "12px" }}
        onClick={() => changeFaculty(student.id)}
      />
    </div>
  );
}

FacultyStudent.propTypes = {
  student: PropTypes.object.isRequired,
};

export default observer(FacultyStudent);
