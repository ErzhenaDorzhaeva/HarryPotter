import React, { useState } from "react";
import PropTypes from "prop-types";
import StudentStore from "../../store/StudentStore";
import { observer } from "mobx-react-lite";
import { HousesNames } from "../../constants";
import ChangStudentModal from "./ChangStudentModal";
import { Button, Modal, Space, Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
function StudentItem({ student }) {
  const { changeFaculty, getDelete } = StudentStore;

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <span className="row">
      <Card>
        <span style={{ textAlign: "center" }} className="card.details">
          <h4>{student.name}</h4>
          <span>
            <img
              alt=""
              className="img"
              src={student.photo ? student.photo : "photo/notname.png"}
            ></img>
          </span>
          {HousesNames.map((name) => (
            <div key={name}>
              <Button
                className="btn"
                onClick={() => changeFaculty(student.id, name)}
              >
                {name}
              </Button>
            </div>
          ))}
          <Button className="btn" onClick={showModal}>
            Change details
          </Button>

          <Modal
            title="Данные об ученике"
            open={open}
            onCancel={handleCancel}
            onOk={handleOk}
            confirmLoading={confirmLoading}
          >
            <div>
              <ChangStudentModal student={student} onCancel={handleCancel} />
            </div>
          </Modal>
          <Space>
            <DeleteOutlined onClick={() => getDelete(student.id)} />
          </Space>
        </span>
      </Card>
    </span>
  );
}

StudentItem.propTypes = {
  student: PropTypes.object.isRequired,
};

export default observer(StudentItem);
