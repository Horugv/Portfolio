import React from "react";

import RightBlock from "./../hoc/RightBlock";
import Title from "../components/UI/Title";
import HorisontalLine from "./../components/UI/HorisontalLine";
import Works from "../components/UI/Works";

import { worksInfo } from "../config";

const Work = () => {
  return (
    <RightBlock>
      <div className="work">
        <div className="right-block__section">
          <Title colorText="Works" />
          <HorisontalLine />
          <Works data={worksInfo.works} />
        </div>
      </div>
    </RightBlock>
  );
};

export default Work;
