import React from "react";
import "./Section1.css";
import laptop from "../../Images/Group.png";
function Section1() {
  return (
    <div className="Section1" id="Section1">
      <div className="Section1Left">
        <img src={laptop} alt="Laptop" />
      </div>
      <div className="Section1Right">
        <div className="Section1RightHeading">
          <p>For Smart Learning?</p>
          <p>Start Here.</p>
        </div>
        <div className="Section1RightMiddle">
          The knowledge Kit is a smart learning platform on the mission to
          provide free and world class learning materials to 21st century
          students in India.
        </div>
        <div className="Section1RightButton">
          <p>Join The Knowledge Kit</p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
