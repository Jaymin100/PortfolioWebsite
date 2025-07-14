import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import MyWork from './Components/MyWork/MyWork'
import Connect from './Components/Connect/Connect'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
    <Hero/>
    <About/>
    <MyWork/>
    <Connect/>
    <Footer/>
    </div>
  )

}

export default App