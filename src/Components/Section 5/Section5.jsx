import React from "react";
import "./Section5.css";
import girl from "../../Images/girl-reading-newspaper 1.png";
import laptop from "../../Images/online-learning 1.png";
import chat from "../../Images/feedback 1.png";
import phone from "../../Images/e-learning 1.png";
function Section5() {
  return (
    <div className="Section5">
      <div className="Section5Top">
        <div className="Section5TopLeft">
          <img src={girl} alt="girl" />
        </div>
        <div className="Section5TopRight">
          <p className="Section5TopRight1">For Learners...</p>
          <p className="Section5TopRight2">
            Who believes that they can do better and contribute to the society
            at large, The Knowledge Kit is the right learning partner for you.
          </p>
        </div>
      </div>
      <div className="Section5Bottom">
        <div className="Section5BottomItems">
          <img src={phone} alt="phone" />
          <div className="Section5BottomItemTop">Learning Simplified</div>
          <div className="Section5BottomItemMiddle">
            Learn from credible articles on various topics in different
            languages by authors.
          </div>
        </div>
        <div className="Section5BottomItems">
          <img src={laptop} alt="laptop" />
          <div className="Section5BottomItemTop">Guided Education</div>
          <div className="Section5BottomItemMiddle">
            Find experts from your field for mentorship, doubt solving and
            discussions.
          </div>
        </div>
        <div className="Section5BottomItems">
          <img src={chat} alt="feedback" />
          <div className="Section5BottomItemTop">Faster Feedback</div>
          <div className="Section5BottomItemMiddle">
            Discuss and ask questions to get quick answers by experts and
            learners like you.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
