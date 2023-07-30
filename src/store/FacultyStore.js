import React from "react";
import { Gryf, Huff, Sly, Rav } from "../constants";

class FacultyStore {
  houses = [
    {
      id: 1,
      name: Huff,
      img: (
        <img className="img2" alt="9" src="/faculty_photo/Hufflepuff.png"></img>
      ),
      text: 'Hufflepuff is one of the faculties of the Hogwarts school of magic and witchcraft. Read the name as "Hufflepuff" and you will imagine how it sounds in English',
    },
    {
      id: 2,
      name: Gryf,
      img: (
        <img
          className="img2"
          alt="10"
          src="/faculty_photo/Gryffindor.png"
        ></img>
      ),
      text: "The house of Godric Gryffindor has been respected by the whole world for ten centuries, and I will not allow you to defame this name in one evening, behaving like ill-mannered, unthinking rude",
    },
    {
      id: 3,
      name: Rav,
      img: (
        <img className="img2" alt="11" src="/faculty_photo/Ravenclaw.png"></img>
      ),
      text: 'In the English original, the faculty is called "Ravenclaw", which translates as "ravens claw" (hence the translation Ravenclaw). A popular Kogtevran proverb says "wit beyond measure is mans greatest treasure',
    },
    {
      id: 4,
      name: Sly,
      img: (
        <img className="img2" alt="12" src="/faculty_photo/Slytherin.png"></img>
      ),
      text: "Distinctive qualities of the students of this faculty : cunning, npm install eslint-plugin-react --save-devthe ability to achieve their goal in any way. They are no more stupid than the Ravenclaws, but are distinguished by their wit and frequent crossing of the boundaries of morality, which from the very foundation of Hogwarts secured a bad reputation for Slytherin",
    },
  ];
}
export default FacultyStore = new FacultyStore();
