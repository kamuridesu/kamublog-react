// import { useState } from 'react'
import { Header } from './components/header/header'
import { HomePage } from './components/home/home'
import { AppContainer } from './style'

const MOCK_POSTS = [
  {
    title: "How to deploy kuberentes on OCI",
    desc: "Setting up OCI Computer instances may be easy but..."
  },
  {
    title: "Setting up ArgoCD on K3S",
    desc: "How to set up ArgoCD for automated CD on K3s..."
  },
  {
    title: "Setting up ArgoCD on K3S",
    desc: "How to set up ArgoCD for automated CD on K3s..."
  },
  {
    title: "Setting up ArgoCD on K3S",
    desc: "How to set up ArgoCD for automated CD on K3s..."
  }
]

const MOCK_DESC = `KAMUBLOG: blog with no useful information!
`

function App() {
  // const [count, setCount] = useState(0)

  return (
    <AppContainer>
      <Header/>
      <HomePage description={MOCK_DESC} posts={MOCK_POSTS}/>
    </AppContainer>
  )
}

export default App
