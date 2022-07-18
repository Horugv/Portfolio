import React, { useState, useEffect } from "react";
import cx from "classnames";

import NavItem from "../components/UI/NavItem";

const data = [
  {
    path: "/portfolio/",
    text: "about",
    icon: "icon-user",
  },
  {
    path: "/portfolio/resume",
    text: "resume",
    icon: "icon-profile",
  },
  {
    path: "/portfolio/works",
    text: "works",
    icon: "icon-terminal",
  },
  {
    path: "/portfolio/contact",
    text: "contact",
    icon: "icon-at",
  },
];

const Nav = () => {
  const [menuStatus, setMenuStatus] = useState(true);
  const [device, setDevice] = useState({
    desktop: false,
    lg: false,
    tablet: false,
    mobile: false,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        if (window.innerWidth > 1199) {
          setDevice({
            desktop: true,
            lg: false,
            tablet: false,
            mobile: false,
          });
        } else if (window.innerWidth > 991) {
          setDevice({
            desktop: false,
            lg: true,
            tablet: false,
            mobile: false,
          });
        } else if (window.innerWidth > 767) {
          setDevice({
            desktop: false,
            lg: false,
            tablet: true,
            mobile: false,
          });
        } else
          setDevice({
            desktop: false,
            lg: false,
            tablet: false,
            mobile: true,
          });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const desktop = (
    <div className="navigation_list">
      {data.map((item, key) => (
        <NavItem path={item.path} text={item.text} icon={item.icon} key={key} />
      ))}
    </div>
  );

  const mobile = (
    <div className="navigation__mob">
      <div className="navigation__user">
        <div className="navigation__img">
          <img src="./media/Ihonin.jpg" alt="Ihonin Yevhenii" />
        </div>
        <div className="navigation__info">
          <div className="navigation__hero">Ihonin Yevhenii</div>
          <div className="navigation__desc">Front-end developer</div>
        </div>
      </div>
      <div
        className="navigation__burger"
        onClick={() => setMenuStatus(!menuStatus)}
      >
        {!menuStatus ? (
          <i className="icon icon-menu" />
        ) : (
          <i className="icon icon-close" />
        )}
      </div>
      <div className={cx("navigation__menu", { show: menuStatus })}>
        <div className="navigation_list">
          {data.map((item, key) => (
            <NavItem
              path={item.path}
              text={item.text}
              icon={item.icon}
              key={key}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return <nav className="navigation">{!device.mobile ? desktop : mobile}</nav>;
};

export default Nav;
