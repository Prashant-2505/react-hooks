import React from 'react'
import { useState } from 'react';

const usestatehook = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h1>UseStateHook</h1>
      <button onClick={() => { setCounter(counter + 1) }}>click me {counter}</button>
      <button onClick={() => { setCounter(0) }}>reset me {counter}</button>

    </div>
  )
}

export default usestatehook
