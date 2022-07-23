import React, { useEffect, useState } from "react";
import { Transition } from "react-transition-group";

const RighrBlock = ({ children }) => {
  let [showBlock, setShowBlock] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setShowBlock(true);
  }, []);

  return (
    <div className="right-block_wrapper">
      <Transition
        in={showBlock}
        timeout={{
          enter: 1000,
          exit: 500,
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
        {(state) => (
          <div className={`right-block_content ${state}`}>
            <div className="right-block_content_wrapper">{children}</div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default RighrBlock;
