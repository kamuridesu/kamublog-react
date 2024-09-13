// import { useState } from 'react'
import { Header } from './components/header/header'
import { HomePage } from './components/home/home'
import { AppContainer } from './style'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <AppContainer>
      <Header/>
      <HomePage/>
    </AppContainer>
  )
}

export default App
