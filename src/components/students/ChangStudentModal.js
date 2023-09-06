import React, { useState } from "react";
import StudentStore from "../../store/StudentStore";
import { observer } from "mobx-react-lite";
import { Rav, Huff, Sly, Gryf } from "../../constants";
import { Button, Form, Input, Select } from "antd";

function ChangStudentModal({ onCancel, student }) {
  const { changeStudent, addStudent } = StudentStore;
  const checkName = student.name ? student.name : "";
  const checkFak = student.fak ? student.fak : "";
  const [name, setName] = useState(checkName);
  const [fak, setFak] = useState(checkFak);

  function submitHandler(event) {
    const id = student.id;

    if (name.trim()) {
      student.name
        ? changeStudent(id, name, fak, onCancel)
        : addStudent(name, fak, onCancel);
    }
  }
  const options = [
    { value: Rav, label: Rav },
    { value: Huff, label: Huff },
    { value: Gryf, label: Gryf },
    { value: Sly, label: Sly },
    { value: "", label: "not selected" },
  ];

  return (
    <div>
      <Form onFinish={submitHandler}>
        <Form.Item>
          <h3>Введите имя ученика:</h3>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <h3>Выберите факультет:</h3>
          <div style={{ margin: "10px" }}>
            <Select
              defaultValue={fak}
              onChange={(event) => {
                setFak(event);
              }}
              options={options}
            ></Select>
          </div>
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="btn" htmlType="submit">
            Save
          </Button>
        </Form.Item>
        <Button type="primary" className="btn" onClick={() => onCancel()}>
          Cancel
        </Button>
      </Form>
    </div>
  );
}

export default observer(ChangStudentModal);
