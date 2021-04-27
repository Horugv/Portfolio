import React, { useState, useEffect } from "react";
import cx from "classnames";

const SkillDots = ({ title, count, activeCount }) => {
  const [countDot, setCountDot] = useState([]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(i);
    }
    setCountDot(arr);
  }, [count]);

  return (
    <div className="skill-dots">
      <h6 className="skill-dots__title">{title}</h6>
      <ul className="skill-dots__list">
        {countDot.map((item, index) => (
          <li
            className={cx("skill-dots__item", { active: index < activeCount })}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default SkillDots;
