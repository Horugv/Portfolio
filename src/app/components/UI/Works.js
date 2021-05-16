import React from "react";

const Works = ({ data }) => {
  return (
    <div className="works">
      {data.map((item, index) => (
        <a
          href="/works"
          className="works__item"
          target="_blank"
          rel="noopener noreferrer"
          key={`${item?.title}-${index}`}
        >
          <div className="works__item_img">
            <img src={item?.path} alt="works img" />
          </div>
          <div className="works__item_title">{item?.title}</div>
          <div className="works__item_info">
            <span className="works__item_info--title">Technology:</span>
            <span className="works__item_info--list">{item?.technology}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Works;
