import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Lebedev_mock from './components/Lebedev_mock'
import AppleSlider from './components/AppleSlider'
import SamsungFooter from './components/SamsungFooter'
function App() {


  return (
    <>
      <Navbar/>
      <Lebedev_mock/>
      <AppleSlider/>
      <SamsungFooter/>
    </>
  )
}

export default App
