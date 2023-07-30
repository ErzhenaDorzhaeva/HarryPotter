import React from "react";
import StudentsList from "../components/StudentsList";
import Faculty from "../components/faculty/Faculty";
import FacultyStore from "../store/FacultyStore";
import { observer } from "mobx-react-lite";
import StudentStore from "../store/StudentStore";

import { HousesNames } from "../constants";

function Home() {
  const { houses } = FacultyStore;
  const { students, setDelete } = StudentStore;

  return (
    <div className="border">
      {HousesNames.map((name, index) => (
        <Faculty
          key={name}
          students={students.filter((student) => student.fak === name)}
          onToggle={setDelete}
          house={houses.find((house) => house.name === name)}
          index={index + 1}
        />
      ))}

      <div style={{ margin: "50px" }}>
        <StudentsList
          students={students.filter((student) => student.fak === null)}
        />
      </div>
    </div>
  );
}

export default observer(Home);
