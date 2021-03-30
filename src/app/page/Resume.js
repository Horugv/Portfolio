import React from 'react';

import RightBlock from './../hoc/RightBlock';
import Title from '../components/UI/Title';
import HorisontalLine from './../components/UI/HorisontalLine';
import { Experience } from '../components/UI/Experience'

const Resume = () => {
  return (
    <RightBlock>
      <div className='right-block__section'>
        <Title colorText="Resume" text=""/>
        <HorisontalLine />
        <Experience 
          date = "2013 - Present"
          title = "Art Director"
          company = "Facebook Inc."
          desc = "Collaborate with creative and development teams on the execution of ideas."
          active = {true}
        />
      </div>    
    </RightBlock>
  ) 
}

export default Resume