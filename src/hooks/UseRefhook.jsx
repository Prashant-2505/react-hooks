import React, { useRef } from 'react'

const UseRefhook = () => {

    const count = useRef(0)

    const handleClick = () => {
        count.current++
        console.log(count.current)
    }

    return (
        <div>
            <h1>Use ref hook</h1>

            <p>The useRef hook in React is used to create a mutable object called a ref object. The ref object has a current property that can be assigned a value, and this value persists across renders. useRef is commonly used to interact with or reference a DOM element, manage focus, or hold a mutable value that doesn't trigger a re-render when it changes.</p>

            <button onClick={() => handleClick()}>
                click me
            </button>
        </div>
    )
}

export default UseRefhook
