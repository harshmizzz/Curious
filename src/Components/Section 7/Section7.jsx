import React from "react";
import "./Section7.css";
import people from "../../Images/people.png";
function Section7() {
  return (
    <div className="Section7">
      <div className="Section7Top">
        <div className="Section7TopLeft">
          <div className="Section7TopLeft1">Together We Can…</div>
          <div className="Section7TopLeft2">
            Every learner in India deserves a chance to become something
            greater. We are a platform that brings learners closer to teachers
            and knowledge bearers to build an academic community unlike anything
            else.
          </div>
          <div className="Section7TopLeft3">Join The Knowledge Kit Today.</div>
          <div className="Section7TopLeft4">Join The Knowledge Kit</div>
        </div>
        <div className="Section7TopRight">
          <img src={people} alt="group" />
        </div>
      </div>
      <div className="Section7Bottom">
        <div className="Section7Bottom1">Who we are</div>
        <div className="Section7Bottom2">
          We are a group of young enthusiastic individuals consisting of
          professors, students and interns from IIT Bombay, willing to build a
          strong community using our experience and knowledge to empower better
          learning for individuals across the globe.{" "}
        </div>
      </div>
    </div>
  );
}

export default Section7;
