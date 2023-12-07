import './App.css'
import Home from './components/Home'
import LogoCarousel from './components/Logoslider/LogoCarousel'
import Navbar from './components/Navbar'
import Webinar from './components/Webinar'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <LogoCarousel/>
      <Webinar/>
    </div>
  )
}

export default App
