import React from 'react'

export const Services = ({icon, title, desc}) => {
  return (
    <div className='services__item'>
      <div className='services__item_icon'>
        <span className={`icon ${icon}`}></span>
      </div>
      <div className='services__item_title'>
        {title}
      </div>
      <div className='services__item_desc'>
        {desc}
      </div>
    </div>
  )
}

export const ServicesList = ({data}) => {
  return (
    <div className='services__list'>
      {data.map((item, index) => 
        <Services
          icon = {item.icon}
          title = {item.title}
          desc = {item.desc}
          key = {index} 
        />
      )}
    </div>
  )
}