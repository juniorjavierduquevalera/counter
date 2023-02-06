import React from 'react'

const CounterUi = ({counterNumber}) => {
  return (
    <div className='flex justify-center items-center bg-neutral rounded-lg border-4 border-warning w-56 h-56'>
      <h2 className='text-success text-6xl'>{counterNumber}</h2>
    </div>
  )
} 
export default CounterUi
