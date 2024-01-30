import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Socialink from './component/Socialink'
import About from './component/About'
import Experience from './component/Experience'
import Contact from './component/Contact'
import Portfolio from './component/Portfolio'
function App() {
  return (
    <>
     <Navbar/>
     <Home/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>

      <Socialink/>
    </>
  )
}

export default App
