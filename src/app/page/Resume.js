import React from "react";

import RightBlock from "../hoc/RightBlock";
import Title from "../components/UI/Title";
import HorisontalLine from "../components/UI/HorisontalLine";
import { Experience } from "../components/UI/Experience";
import SkillDots from "../components/UI/Skill/SkillDots";
import SkillCircle from "../components/UI/Skill/SkillCircle";
import SkillList from "../components/UI/Skill/SkillList";
import TitleWithIcon from "../components/UI/TitleWithIcon";

import { resumeInfo } from '../config' 

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
              data={resumeInfo.experience}
            />
          </div>
          <div className="resume__experience_block">
            <Experience
              blockTitle="education"
              icon={"icon-graduate-cap"}
              data={resumeInfo.eductaions}
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
                {resumeInfo.coding.map((item) => (
                  <div className="circle" key={Math.random()}>
                    <SkillCircle title={item.title} percent={item.percent} />
                  </div>
                ))}
              </div>
            </div>
            <div className="resume__skill_block">
              <TitleWithIcon icon="icon-list" title="Knowledge" />
              <div className="resume__skill_block_item">
                <SkillList data={[...resumeInfo.knowledge]} />
              </div>
            </div>
          </div>
          <div className="resume__skill_row">
            <div className="resume__skill_block">
              <TitleWithIcon icon="icon-language" title="Languages" />
              <div className="resume__skill_block_item resume__skill_block_item-dots">
                {resumeInfo.language.map((item) => (
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
