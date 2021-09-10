import React from "react";
import "./Section3.css";
import Book from "../../Images/e-learning.png";
import Gate from "../../Images/government.png";
import people from "../../Images/community.png";
function Section3() {
  return (
    <div className="Section3">
      <div className="Section3Top">Why The Knowledge Kit Works...</div>
      <div className="Section3Bottom">
        <div className="Section3Items">
          <img src={Book} alt="Book" />
          <p className="Section3ItemsHeading">Personalised Learning</p>
          <p className="Section3ItemsContent">
            Students can learn at their own pace, fill gaps in their
            understanding through clarification, and accelerate their learning.
          </p>
        </div>
        <div className="Section3Items">
          <img src={Gate} alt="Gate" />
          <p className="Section3ItemsHeading">Trusted Content</p>
          <p className="Section3ItemsContent">
            The knowledge Kit will publish learning materials from trusted and
            credible teachers, scholars, researchers and professors from various
            indian universities.
          </p>
        </div>
        <div className="Section3Items">
          <img src={people} alt="People" />
          <p className="Section3ItemsHeading">Empower Community</p>
          <p className="Section3ItemsContent">
            Learners and experts can interact to teach and learn in an
            atmosphere that supports self learning, thorough guidance and
            meeting every student’s needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section3;
