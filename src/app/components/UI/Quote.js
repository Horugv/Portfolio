import React from "react";

import { defaultPath } from "../../config";

export const Quote = ({ desc, img, name, position }) => {
  return (
    <div className="quote">
      <div className="quote__desc">{desc}</div>
      <div className="quote__img">
        <img src={`${defaultPath}/media/Ihonin.jpg`} alt="hero" />
      </div>
      <div className="quote__name">{name}</div>
      <div className="quote__position">{position}</div>
    </div>
  );
};
