import React from "react";
import "./Section6.css";
import skill from "../../Images/skill-change-concept.png";
import network from "../../Images/network (1) 1.png";
import brain from "../../Images/creativity-process.png";
function Section6() {
  return (
    <div className="Section6">
      <div className="Section6Top">
        <div className="Section6TopLeft">
          <p className="Section6Topleft1">For Writers...</p>
          <p className="Section6Topleft2">
            Who want to share knowledge, we give them the recognition they
            deserve. Write academic articles and interact to support learners
            from across India.
          </p>
        </div>
        <div className="Section6TopRight"></div>
      </div>
      <div className="Section6Bottom">
        <div className="Section6BottomItems">
          <img src={skill} alt="skill" />
          <div className="Section6BottomTop">Skill Recognition</div>
          <div className="Section6BottomMiddle">
            Receive recognition for your knowledge and accomplishment.
          </div>
        </div>
        <div className="Section6BottomItems">
          <img src={network} alt="network" />
          <div className="Section6BottomTop">Building Network</div>
          <div className="Section6BottomMiddle">
            Engage with other experts and bright students.
          </div>
        </div>
        <div className="Section6BottomItems">
          <img src={brain} alt="brain" />
          <div className="Section6BottomTop">Unleash your creativity</div>
          <div className="Section6BottomMiddle">
            Become a content creator on a premium open learning platform.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
