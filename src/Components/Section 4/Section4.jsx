import React from "react";
import "./Section4.css";
function Section4() {
  return (
    <div className="Section4">
      <div className="Section4Top">Our Learning Community...</div>
      <div className="Section4Bottom">
        <div className="Section4Left">
          Across India who need to excel in their learning goals in university
          courses, The Knowledge Kit is a smart learning platform that provides
          credible learning materials and smart learning tools that can help you
          achieve your potential no matter where you enroll and what you learn.
        </div>
        <div className="Section4Right">
          <div className="Section4RightItems">
            <div className="Section4RightTop">Academic Achievers</div>
            <div className="Section4RightMiddle">
              Students with strong academic foundations, who are clear in core
              and application oriented concepts can become part of an community
              of academicians to share their knowledge with others.
            </div>
            <div className="Section4Line">
              <svg
                width="398"
                height="8"
                viewBox="0 0 398 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="4"
                  y1="4"
                  x2="394"
                  y2="4"
                  stroke="#14213D"
                  stroke-width="8"
                  stroke-linecap="round"
                  stroke-dasharray="1 18"
                />
              </svg>
            </div>
          </div>
          <div className="Section4RightItems">
            <div className="Section4RightTop">Dedicated Learners</div>
            <div className="Section4RightMiddle">
              Students with a strong drive to excel in their pursuit of
              knowledge, having relatively strong foundation in core and
              application concepts can benefit from a platform for smart
              organised learning.
            </div>
            <div className="Section4Line">
              {" "}
              <svg
                width="398"
                height="8"
                viewBox="0 0 398 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="4"
                  y1="4"
                  x2="394"
                  y2="4"
                  stroke="#14213D"
                  stroke-width="8"
                  stroke-linecap="round"
                  stroke-dasharray="1 18"
                />
              </svg>
            </div>
          </div>
          <div className="Section4RightItems">
            <div className="Section4RightTop">Self Learners</div>
            <div className="Section4RightMiddle">
              Students who engage in study on their own terms by expploring
              various topics for learning to expand their capapcity to hold more
              knowledge can benefit from a smart learning platform built for
              self explorations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
