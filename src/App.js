import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Information from "./Information";

function App() {
  return (
    <div className="border">
      <span sstyle={{ margin: "10px" }}>
        <Link to="/AboutUs"> About Us</Link>
      </span>
      <span style={{ margin: "10px" }}>
        <Link to="/Home"> about the houses of Hogwarts</Link>
      </span>
      <span style={{ margin: "10px" }}>
        <Link to="/Information"> Information</Link>
      </span>
      <Routes>
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Information" element={<Information />} />
      </Routes>
    </div>
  );
}
export default App;
