import React from "react";

import RightBlock from "../hoc/RightBlock";
import Title from "../components/UI/Title";
import HorisontalLine from "../components/UI/HorisontalLine";
import { Experience } from "../components/UI/Experience";
import SkillDots from "../components/UI/Skill/SkillDots";
import SkillCircle from "../components/UI/Skill/SkillCircle";
import SkillList from "../components/UI/Skill/SkillList";
import TitleWithIcon from "../components/UI/TitleWithIcon";

const experience = [
  {
    date: "2020 - Present",
    title: "Front-end developer",
    company: "Web-systems Solutions",
    desc: "Сreation layouts for CRM systems using HTML/SCSS/jQuery and create React/NextJS apps.",
    active: true,
  }
];

const eductaions = [
  {
    date: "2016 - 2021",
    title: "Computer Science",
    company: "Kamenetz-Podolsk National University nomine Ivan Ogienko",
    desc: "",
    active: false,
  }
];

const coding = [
  {
    title: "HTML5",
    percent: 95,
  },
  {
    title: "CSS3",
    percent: 85,
  },
  {
    title: "JavaScript",
    percent: 80,
  },
  {
    title: "jQuery",
    percent: 75,
  },
  {
    title: "React",
    percent: 80,
  },
];

const language = [
  {
    title: "Ukrainian",
    count: 10,
    activeCount: 10,
  },
  {
    title: "Russian",
    count: 10,
    activeCount: 9,
  },
  {
    title: "English",
    count: 10,
    activeCount: 3,
  },
];

const knowledge = [
  "HTML, CSS, JS",
  "BEM",
  "Pug",
  "SCSS | Stylus | Less",
  "jQuery",
  "React",
  "React Hooks",
  "React Redux",
  "React Context",
  "NextJS",
  "Rest API",
  "Git",
  "npm, yarn",
  "Gulp",
  "Webpack 4",
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
              data={eductaions}
            />
          </div>
        </div>
      </div>
      <div className="right-block__section">
        <Title colorText="My" text="Skills" />
        <HorisontalLine />
        <div className="resume__skill">
          <div className="resume__skill_row">
            <div className="resume__skill_block">
              <TitleWithIcon icon="icon-embed2" title="Coding" />
              <div className="resume__skill_block_item resume__skill_block_item-circle">
                {coding.map((item) => (
                  <div className="circle" key={Math.random()}>
                    <SkillCircle title={item.title} percent={item.percent} />
                  </div>
                ))}
              </div>
            </div>
            <div className="resume__skill_block">
              <TitleWithIcon icon="icon-list" title="Knowledge" />
              <div className="resume__skill_block_item">
                <SkillList data={[...knowledge]} />
              </div>
            </div>
          </div>
          <div className="resume__skill_row">
            <div className="resume__skill_block">
              <TitleWithIcon icon="icon-language" title="Languages" />
              <div className="resume__skill_block_item resume__skill_block_item-dots">
                {language.map((item) => (
                  <div className="dots" key={Math.random()}>
                    <SkillDots
                      title={item.title}
                      count={item.count}
                      activeCount={item.activeCount}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </RightBlock>
  );
};

export default Resume;
