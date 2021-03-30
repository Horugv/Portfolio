import React from 'react'
import classNames from 'classnames'

const CVBlock = () => {
  return (
    <div className='CVBlock'>
      <div className='CVBlock_slide'>
      </div>
      <div className='CVBlock_hero'>
        <img src='' alt=''/>
      </div>
      <div className='CVBlock_info'>
        <div className='CVBlock_info_name'>
          Ihonin Yevhenii
        </div>
        <div className='CVBlock_info_job'>
          Front-end developer
        </div>
        <div className='CVBlock_info_social'>
          <i className={classNames('icon','icon-telegram')}></i>
          <i className={classNames('icon','icon-skype')}></i>
          <i className={classNames('icon', 'icon-github')}></i>
        </div>
      </div>
      
      <div className='CVBlock_bottom'>
        <div className='CVBlock_button'>download cv</div>
        <div className='CVBlock_button'>contact me</div>
      </div>
    </div>
  )
}

export default CVBlock