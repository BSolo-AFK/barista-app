// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import macaroon from './components/macaroons.png'
import './App.css'
import BaristaForm from './components/BaristaForm'

function App() {


  return (
    <div className='App'>
    <div className="title-container">
      <img src={macaroon} className="logo" alt="logo" />
      <h1 className="title">On My Grid</h1>
      <p>So you think you can barista? Let's put that to the test...</p>
    </div>
    <BaristaForm />
    </div>
)
}

export default App
