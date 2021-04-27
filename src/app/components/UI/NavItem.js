import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const NavItem = ({ path, text, icon }) => {
  return (
    <NavLink
      to={path}
      exact
      activeClassName="active"
      className="navigation_item"
    >
      <i className={classNames("icon", `${icon}`)}></i>
      <span>{text}</span>
    </NavLink>
  );
};

export default NavItem;
