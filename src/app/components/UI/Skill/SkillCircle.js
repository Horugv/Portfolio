import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillCircle = ({ title, percent }) => {
  return (
    <div className="skill-circle">
      <CircularProgressbar
        value={percent}
        text={`${percent}%`}
        styles={buildStyles({
          strokeLinecap: "butt",
          textColor: "rgba(255, 255, 255, 0.85)",
          pathColor: "#78cc6d",
          trailColor: "#3e4148",
        })}
      />
      <h6 className="skill-circle__title">{title}</h6>
    </div>
  );
};

export default SkillCircle;
