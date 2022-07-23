import React from "react";

import RightBlock from "./../hoc/RightBlock";
import Title from "../components/UI/Title";
import HorisontalLine from "./../components/UI/HorisontalLine";
import { TextWithDotsBlock } from "../components/UI/TextWithDots";
import { ServicesList } from "../components/UI/Services";
// import { Quote } from "../components/UI/Quote";

import { aboutInfo } from '../config' 

const About = () => {
  return (
    <RightBlock>
      <div className="about">
        <div className="about__bio right-block__section">
          <Title colorText="About" text="Me" />
          <HorisontalLine />
          <div className="right-block_text about__bio_text">
            I am Ihonin Yevhenii, Front-end developer from Ukraine, Ivano-Frankivsk. 
            I have 2 years of commercial web development experience. I’m specializing in frontend development using HTML, CSS/SCSS, JS/jQuery, React/Next.
          </div>
          <div className="about__bio_info">
            <TextWithDotsBlock data={aboutInfo.mainInfo} />
          </div>
        </div>

        <div className="about__services right-block__section">
          <Title colorText="My" text="Experience" />
          <HorisontalLine />
          <div className="about__services_list">
            <ServicesList data={aboutInfo.experienceInfo} />
          </div>
        </div>
        {/* <div className="about__quote right-block__section">
          <Title colorText="Quote" text="" />
          <HorisontalLine />
          <div className="about__quote_item">
            <Quote
              desc={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              }
              img={""}
              name={"Yevhenii Ihonin"}
              position={"React dev"}
            />
          </div>
        </div> */}
      </div>
    </RightBlock>
  );
};

export default About;
