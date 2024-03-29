import React from "react";

import RightBlock from "../hoc/RightBlock";
import Title from "../components/UI/Title";
import HorisontalLine from "./../components/UI/HorisontalLine";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";
import { TextWithDotsBlock } from "../components/UI/TextWithDots";

import { contactInfo } from "../config";

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
            <TextWithDotsBlock data={contactInfo.mainInfo} />
          </div>
        </div>
        <div className="right-block__section">
          <Title colorText="Contact" text="Form" />
          <HorisontalLine />
          <div className="contact__form">
            <ContactForm />
          </div>
        </div>
      </div>
    </RightBlock>
  );
};

export default Contact;
