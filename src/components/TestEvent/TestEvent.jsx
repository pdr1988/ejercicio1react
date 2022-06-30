import React from 'react'

export default function TestEvent() {
    function handleOnKeyDown (evt){
    if( evt.code=="KeyA"|| evt.code=="KeyE"||evt.code=="KeyI" ||evt.code=="KeyO" ||evt.code=="KeyU" )    
    {    
        evt.preventDefault();
    }
    }
  return (
    <div>
      <input type="text" onKeyDown={handleOnKeyDown} />
    </div>
  )
}
