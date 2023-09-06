import React, { useState } from "react";
import StudentsList from "../components/students/StudentsList";
import Faculty from "../components/faculty/Faculty";
import FacultyStore from "../store/FacultyStore";
import { observer } from "mobx-react-lite";
import StudentStore from "../store/StudentStore";
import ChangStudentModal from "../components/students/ChangStudentModal";
import { HousesNames } from "../constants";
import { Button, Modal, Divider } from "antd";

function Home() {
  const { houses } = FacultyStore;
  const { students } = StudentStore;

  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div className="border">
      <Divider orientation="right">Houses of Hogwarts:</Divider>
      {HousesNames.map((name, index) => (
        <Faculty
          key={name}
          students={students.filter((student) => student.fak === name)}
          house={houses.find((house) => house.name === name)}
          index={index + 1}
          open={open}
          showModal={showModal}
        />
      ))}

      <div style={{ margin: "50px" }}>
        <StudentsList
          open={open}
          showModal={showModal}
          students={students.filter((student) => student.fak === null)}
        />
      </div>
      <div style={{ margin: "50px" }}>
        <Button className="btn" onClick={showModal}>
          Add Student
        </Button>
        <Modal
          title="Данные об ученике"
          open={open}
          onCancel={handleCancel}
          footer={null}
        >
          <ChangStudentModal student={""} onCancel={handleCancel} />
        </Modal>
      </div>
    </div>
  );
}

export default observer(Home);
