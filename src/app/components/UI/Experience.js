import React from "react";
import classNames from "classnames";

import TitleWithIcon from "./TitleWithIcon"

export const Experience = ({ blockTitle, data, icon }) => {
  return (
    <div className="experience__block">
      <TitleWithIcon icon={icon} title={blockTitle} />
      <div className="experience__list">
        {data &&
          data.map((item, index) => (
            <div className="experience__item" key={index}>
              <div
                className={classNames("experience__item_date", {
                  "experience__item_date-active": item.active,
                })}
              >
                {item.date}
              </div>
              <div className="experience__item_title">{item.title}</div>
              <div className="experience__item_company">{item.company}</div>
              <div className="experience__item_desc">{item.desc}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
