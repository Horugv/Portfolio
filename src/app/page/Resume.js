import React from "react";

import RightBlock from "../hoc/RightBlock";
import Title from "../components/UI/Title";
import HorisontalLine from "../components/UI/HorisontalLine";
import { Experience } from "../components/UI/Experience";

const experience = [
  {
    date: "2013 - Present",
    title: "Art Director",
    company: "Facebook Inc.",
    desc:
      "Collaborate with creative and development teams on the execution of ideas.",
    active: true,
  },
  {
    date: "2013 - Present",
    title: "Art Director",
    company: "Facebook Inc.",
    desc:
      "Collaborate with creative and development teams on the execution of ideas.",
    active: false,
  },
];

const Resume = () => {
  return (
    <RightBlock>
      <div className="right-block__section">
        <Title colorText="Resume" text="" />
        <HorisontalLine />
        <div className="resume__experience">
          <div className="resume__experience_block">
            <Experience
              blockTitle="experience"
              icon={"icon-briefcase"}
              data={experience}
            />
          </div>
          <div className="resume__experience_block">
            <Experience
              blockTitle="education"
              icon={"icon-graduate-cap"}
              data={experience}
            />
          </div>
        </div>
      </div>
    </RightBlock>
  );
};

export default Resume;
