import React from 'react'

export const TextWithDots = ({title, desc}) => {
  return (
    <div className='text-with-dots__item'>
      <span className='text-with-dots__title'>{`${title}. . . . . . . . . `}</span>
      <span className='text-with-dots__desc'>{desc}</span>
    </div>
  )
}

export const TextWithDotsBlock = ({data}) => {
  return (
    <div className='text-with-dots__list'>
      {data.map((item, index) => 
        <TextWithDots 
          title = {item.title}
          desc = {item.desc} 
          key = {index}/>
      )}
    </div>
  )
}