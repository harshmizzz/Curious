import React from "react";
import "./Section2.css";
function Section2() {
  return (
    <div className="Section2" id="Section2">
      <div className="Section2Top1">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M79.7557 40.3118C82.7466 67.1824 57.6771 80 37.1563 80C16.6354 80 0 62.231 0 40.3118C0 18.3926 5.83455 -8.09288 35.3915 2.34805C57.8228 10.2718 76.7648 13.4413 79.7557 40.3118Z"
            fill="#FFCB3C"
            fill-opacity="0.55"
          />
          <path
            d="M27 33L40 46L53 33"
            stroke="black"
            stroke-opacity="0.8"
            stroke-width="5"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <div className="Section2Top">
        <p>Introducing The Knowledge Kit</p>
      </div>
      <div className="Section2Middle">
        <p>
          For learners across India who need to excel in their learning goals in
          university courses, The Knowledge Kit is a smart learning platform
          that provides credible learning materials and smart learning tools
          that can help you achieve your potential no matter where you enroll
          and what you learn.
        </p>
        <p>
          Unlike other learning platforms, The Knowledge Kit serves all your
          needs for smart learning on the go without having to use any
          additional learning platforms.
        </p>
      </div>
      <div className="Section2TopBottom"></div>
    </div>
  );
}

export default Section2;
