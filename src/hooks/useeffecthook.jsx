import React from 'react'
import { useState, useEffect } from 'react';

const useeffecthook = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
      console.log("run once only")
    }, [])
  
    useEffect(() => {
      if (counter === 5) alert("its 5 now")
      if (counter === 0) alert("its 0 now")
  
    }, [counter])
    return (
        <div><h1>UseEffectHook</h1>
            <button onClick={() => { setCounter(counter + 1) }}>click me {counter}</button>
            <button onClick={() => { setCounter(0) }}>reset me {counter}</button>
            </div>

    )
}

export default useeffecthook
