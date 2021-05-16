import React from "react";

import RightBlock from "./../hoc/RightBlock";
import Title from "../components/UI/Title";
import HorisontalLine from "./../components/UI/HorisontalLine";
import Works from "../components/UI/Works";

const dataWorks = [
  {
    title: "Forest",
    path: "/media/bg-test.jpg",
    technology: "React, html, css",
  },
  {
    title: "Forest",
    path: "/media/bg-test.jpg",
    technology: "React, html, css, React, html, css",
  },
  {
    title: "Forest",
    path: "/media/bg-test.jpg",
    technology: "React, html, css, test",
  },
];

const Work = () => {
  return (
    <RightBlock>
      <div className="work">
        <div className="right-block__section">
          <Title colorText="Works" />
          <HorisontalLine />
          <Works data={dataWorks} />
        </div>
      </div>
    </RightBlock>
  );
};

export default Work;
