import React, { useState } from 'react'
import CounterUi from './components/counter/Index'
import Title from './components/title/Index'
import ButtonCounter from './components/button/Index'
import './App.css'


function App() {
  const [counter, setCounter]= useState(0)

  const numberClick = () => {
    setCounter(counter +1);
  }

  const rebootCounter = () => {
    setCounter(0);
  }

  return (
    <div className="App">
      <Title />
      <CounterUi counterNumber={counter} />
      <div className='flex justify-around items-center'>
        <ButtonCounter
          text='click ...'
          isButtonClick={true}
          click={numberClick}
        />
        <ButtonCounter
          text='reboot'
          isButtonClick={false}
          click={rebootCounter}
        />
      </div>
    </div>
  )
}

export default App
