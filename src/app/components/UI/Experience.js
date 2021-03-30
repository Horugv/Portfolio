import React from 'react'
import classNames from 'classnames';

export const Experience  = ({date, title, company, desc, active}) => {
  return (
    <div className='experience__item'>
      <div className={classNames('experience__date', { 'experience__date-active': active})} >
        {date}
      </div>
      <div className='experience__title'>
        {title}
      </div>
      <div className='experience__company'>
        {company}
      </div>
      <div className='experience__desc'>
        {desc}
      </div>
    </div>
  )
}

