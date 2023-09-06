import React from "react";
import PropTypes from "prop-types";
import StudentStore from "../../store/StudentStore";
import { observer } from "mobx-react-lite";
import { HousesNames } from "../../constants";
import { Button, Space, Card } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
function StudentItem({ student, open, showModal }) {
  const { changeFaculty, getDelete } = StudentStore;

  return (
    <span className="row">
      <Card>
        <span style={{ textAlign: "center" }} className="card.details">
          <EditOutlined
            style={{
              marginLeft: "160px",
            }}
            onClick={showModal}
          />
          <Space>
            <DeleteOutlined
              style={{
                marginLeft: "10px",
              }}
              onClick={() => getDelete(student.id)}
            />
          </Space>
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
        </span>
      </Card>
    </span>
  );
}

StudentItem.propTypes = {
  student: PropTypes.object.isRequired,
};

export default observer(StudentItem);
