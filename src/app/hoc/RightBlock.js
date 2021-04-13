import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import { Scrollbars } from 'react-custom-scrollbars';


const RighrBlock = ({children}) => {
  let [showBlock,setShowBlock] = useState(false)

  useEffect(() => {
    setShowBlock(true)
  }, [])

  // useEffect(() => {
  //   // console.log(test)
  //   return () =>{ setTest(false)}
  // })

  return (
    <div className='right-block_wrapper'>
      <Transition
          in = {showBlock}
          timeout = {{
            enter: 1000,
            exit: 500
          }}
          mountOnEnter
          unmountOnExit
          // onEnter = {() => console.log('onEnter')}
          // onEntering = {() => console.log('onEntering')}
          // onEntered = {() => console.log('onEntered')}
          // onExit = {() => console.log('onExit')}
          // onExiting = {() => console.log('onExiting')}
          // onExited = {() => console.log('onExited')}
        >
          {state => 
            // <Scrollbars  style={{  height: '100%' }}>
              <div className = {`right-block_content ${state}`} >
                <div className='right-block_content_wrapper'>
                  {children}
                </div>
              </div>
            // </Scrollbars>
          }
        </Transition>
    </div>
  )
}

export default RighrBlock