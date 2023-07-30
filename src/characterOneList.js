import React from "react";
import PropTypes from "prop-types";

// FIXME: тут можно описать в одной строке, так как берутся данные из одного компонента
// import { Gryf, Rav, Sly, Huff } from "../constants";
import { Gryf } from "./constants";
import { Rav } from "./constants";
import { Sly } from "./constants";
import { Huff } from "./constants";

// FIXME: названия файла данного компонента не должен начинаться с маленькой буквы (так как другие компоненты названы с большой буквы), исключения только для глобальных файлов по типу constants.js и всякие системные/стандартные файлы (index) 
// FIXME: fak зачем он?
function CharacterOneList({ student, inFaculty, fak }) {
  return (
    <span className="row">
      <span className="card">
        <span style={{ textAlign: "center" }} className="card.details">
          <h4>{student.name}</h4>
          {/* FIXME: не принято ставить пробелы, если нужны отступы то это делается через css */}
          <span> {student.photo} </span>
          {/* FIXME: кнопка повторяется 4 раза с разными параметрами - нужно сделать через map (чтобы кнопка использовалась один раз) */}
          <div>
            <button
              className="custom-btn btn-6"
              onClick={() => inFaculty(student.id, Huff)}
            >
              {/* FIXME: Нужно использовать глобальные константы константы */}
              Hufflepuff
            </button>
          </div>
          <div>
            <button
              className="custom-btn btn-6"
              onClick={() => inFaculty(student.id, Gryf)}
            >
              {/* FIXME: Нужно использовать глобальные константы константы */}
              Gryffindor
            </button>
          </div>
          <div>
            <button
              className="custom-btn btn-6"
              onClick={() => inFaculty(student.id, Rav)}
            >
              {/* FIXME: Нужно использовать глобальные константы константы */}
              Ravenclaw
            </button>
          </div>
          <div>
            <button
              className="custom-btn btn-6"
              onClick={() => inFaculty(student.id, Sly)}
            >
              {/* FIXME: Нужно использовать глобальные константы константы */}
              Slytherin
            </button>
          </div>
        </span>
      </span>
    </span>
  );
}

// FIXME: не прописаны все пропсы
CharacterOneList.propTypes = {
  student: PropTypes.object.isRequired,
};

export default CharacterOneList;
