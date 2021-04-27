import React from "react";

const TitleWithIcon = ({ icon, title }) => {
  return (
    <div className="titleWithIcon">
      <i className={`icon ${icon}`} />
      {title}
    </div>
  );
};

export default TitleWithIcon;
