import React from "react";

import RightBlock from "./../hoc/RightBlock";
import Title from "../components/UI/Title";
import HorisontalLine from "./../components/UI/HorisontalLine";
import { TextWithDotsBlock } from "../components/UI/TextWithDots";
import { ServicesList } from "../components/UI/Services";
import { Quote } from "../components/UI/Quote";

const dataInfo = [
  {
    title: "Age",
    desc: "23",
  },
  {
    title: "Residence",
    desc: "Ukrain",
  },
  {
    title: "Addres",
    desc: "Ivano-Frankivsk, Ukraine",
  },
];

const dataServices = [
  {
    icon: "icon-embed2",
    title: "front-end",
    desc: "Modern and mobile-ready website that will help you reach all of your marketing.",
  },
  {
    icon: "icon-embed2",
    title: "front-end",
    desc: "Modern and mobile-ready website that will help you reach all of your marketing.",
  },
  {
    icon: "icon-embed2",
    title: "front-end",
    desc: "Modern and mobile-ready website that will help you reach all of your marketing.",
  },
  {
    icon: "icon-embed2",
    title: "front-end",
    desc: "Modern and mobile-ready website that will help you reach all of your marketing.Modern and mobile-ready website that will help you reach all of your marketing.",
  },
];

const About = () => {
  return (
    <RightBlock>
      <div className="about">
        <div className="about__bio right-block__section">
          <Title colorText="About" text="Me" />
          <HorisontalLine />
          <div className="right-block_text about__bio_text">
            I am Ryan Adlard, web designer from USA, California. I have rich
            experience in web site design and building and customization, also I
            am good at wordpress. I love to talk with you about our unique.
          </div>
          <div className="about__bio_info">
            <TextWithDotsBlock data={dataInfo} />
          </div>
        </div>

        <div className="about__services right-block__section">
          <Title colorText="My" text="Services" />
          <HorisontalLine />
          <div className="about__services_list">
            <ServicesList data={dataServices} />
          </div>
        </div>
        <div className="about__quote right-block__section">
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
        </div>
      </div>
    </RightBlock>
  );
};

export default About;
