import React from 'react'
import Customerreviews from './components/Customerreviews'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Prowork from './components/Prowork'
import Quicklinks from './components/Quicklinks'
import Services from './components/Services'
import Slider from './components/Slider'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Slider/>
    <Prowork/>
    <Faqs/>
    <Services/>
    <Customerreviews/>
    <Quicklinks/>
    <Footer/>
    </>
  )
}

export default App
