
import { useContext } from 'react'
import './App.css'
import Home from './page/Home'
import { GlobalContext } from './context'

function App() {

  const { theme, seTheme } = useContext(GlobalContext)


  return (

    <div style={{ background: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
      <Home />
    </div>

  )
}

export default App
