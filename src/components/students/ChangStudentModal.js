import React, { useState } from "react";
import StudentStore from "../../store/StudentStore";
import { observer } from "mobx-react-lite";
import { Rav, Huff, Sly, Gryf } from "../../constants";
import { Button, Form, Input } from "antd";

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
            <select
              value={fak}
              onChange={(event) => setFak(event.target.value)}
            >
              <option value="">not selected</option>
              <option value={Huff}>{Huff}</option>
              <option value={Rav}>{Rav}</option>
              <option value={Sly}>{Sly}</option>
              <option value={Gryf}>{Gryf}</option>
            </select>
          </div>
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="btn" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default observer(ChangStudentModal);
