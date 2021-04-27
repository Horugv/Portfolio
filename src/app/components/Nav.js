import React from "react";

import NavItem from "../components/UI/NavItem";

const data = [
  {
    path: "/about",
    text: "about",
    icon: "icon-user",
  },
  {
    path: "/resume",
    text: "resume",
    icon: "icon-profile",
  },
  {
    path: "/works",
    text: "works",
    icon: "icon-terminal",
  },
  {
    path: "/contact",
    text: "contact",
    icon: "icon-at",
  },
];

const Nav = () => {
  return (
    <nav className="navigation">
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
    </nav>
  );
};

export default Nav;
