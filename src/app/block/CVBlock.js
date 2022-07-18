import React from "react";
import classNames from "classnames";

const CVBlock = () => {
  return (
    <div className="CVBlock">
      <div className="CVBlock_slide">
        <img src="./media/bg-test.jpg" alt="forest" />
      </div>
      <div className="CVBlock_hero">
        <img src="./media/Ihonin.jpg" alt="Yevhenii Ihonin" />
      </div>
      <div className="CVBlock_info">
        <div className="CVBlock_info_name">Ihonin Yevhenii</div>
        <div className="CVBlock_info_job">Front-end developer</div>
        <div className="CVBlock_info_social">
          <a
            href="https://t.me/IgoninYevhenii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={classNames("icon", "icon-telegram")} />
          </a>
          <a
            href="https://join.skype.com/invite/CR4NdY83qkes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={classNames("icon", "icon-skype")}></i>
          </a>
          <a
            href="https://github.com/Horugv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={classNames("icon", "icon-github")}></i>
          </a>
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
