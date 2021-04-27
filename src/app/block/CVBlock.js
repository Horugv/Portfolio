import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const CVBlock = () => {
  return (
    <div className="CVBlock">
      <div className="CVBlock_slide"></div>
      <div className="CVBlock_hero">
        <img src="" alt="" />
      </div>
      <div className="CVBlock_info">
        <div className="CVBlock_info_name">Ihonin Yevhenii</div>
        <div className="CVBlock_info_job">Front-end developer</div>
        <div className="CVBlock_info_social">
          <Link to="/telegram">
            <i className={classNames("icon", "icon-telegram")} />
          </Link>
          <Link to="/skype">
            <i className={classNames("icon", "icon-skype")}></i>
          </Link>
          <Link to="/github">
            <i className={classNames("icon", "icon-github")}></i>
          </Link>
        </div>
      </div>

      <div className="CVBlock_bottom">
        <button className="CVBlock_button">download cv</button>
        <button className="CVBlock_button">contact me</button>
      </div>
    </div>
  );
};

export default CVBlock;
