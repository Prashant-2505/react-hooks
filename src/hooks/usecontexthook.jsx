import React, { useContext } from 'react'
import { GlobalContext } from '../context'

const usecontexthook = () => {

    const { theme, setTheme } = useContext(GlobalContext)

    return (
        <div>
            <h1>Use context hook</h1>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Theme is {theme}</button>
        </div>
    )
}

export default usecontexthook
