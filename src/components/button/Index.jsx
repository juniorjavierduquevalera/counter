import React from 'react'

 const ButtonCounter = ({isButtonClick, text, click }) => {
  return (
    <div className='flex justify-center my-4'>
        <button 
          className={isButtonClick ? 'btn btn-outline btn-warning' : 'btn btn-outline btn-success'}
          onClick={click}
        >
        {text}</button>
    </div>
  )
}

export default ButtonCounter
