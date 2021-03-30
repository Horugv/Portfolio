import React from 'react';

const Title = ({colorText, text}) => {
  return (
    <div className="title">
      <span>{colorText}</span> {text}
    </div>
  )
}

export default Title