import React from 'react'
import Usestatehook from '../hooks/Usestatehook'
import Useeffecthook from '../hooks/useeffecthook'
import Usecontexthook from '../hooks/usecontexthook'
import UseReducerHook from '../hooks/UseReducerHook'
import UseRefhook from '../hooks/UseRefhook'


const Home = () => {
    return (
        <div>
            <Usestatehook />
            <Useeffecthook />
            <Usecontexthook />
            <UseReducerHook/>
            <UseRefhook/>
        </div>
    )
}

export default Home
