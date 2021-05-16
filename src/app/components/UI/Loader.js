import React from "react";
import cx from "classnames";

const Loader = ({ loading }) => {
  console.log(loading);
  return (
    <div className={cx("loader", { loadingShow: loading })}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
