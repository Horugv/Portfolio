import React from "react";

const SkillList = ({ data }) => {
  return (
    <ul className="skill-list">
      {
        data.map(item => (
          <li className="skill-list__item" key={Math.random()}>
            {item}
          </li>
        ))
      }
    </ul>
  );
};

export default SkillList;
