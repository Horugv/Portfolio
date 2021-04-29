import React from "react";

import RightBlock from "../hoc/RightBlock";
import Title from "../components/UI/Title";
import HorisontalLine from "./../components/UI/HorisontalLine";
import Map from "../components/Map";
import { TextWithDotsBlock } from "../components/UI/TextWithDots";

const contactInfo = [
  {
    title: "Address",
    desc: "Ivano-Frankivsk, Ukraine",
  },
  {
    title: "Email",
    desc: "Horugv16@gmail.com",
  },
  {
    title: "Phone",
    desc: "+380 97 909 3001",
  },
];

const Contact = () => {
  return (
    <RightBlock>
      <div className="contact">
        <div className="right-block__section">
          <Title colorText="Get" text="in Touch" />
          <HorisontalLine />
          <div className="contact__map">
            <Map />
          </div>
          <div className="contact__info">
          <TextWithDotsBlock data={contactInfo} />
          </div>
        </div>
      </div>
    </RightBlock>
  );
};

export default Contact;
