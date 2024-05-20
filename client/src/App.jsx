import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import About from './About/About';
import ScrollToTop from './components/ScrollToTop';
import Scrollbar from './components/Scrollbar';
import VehicleFleet from './VehicleFleet/VehicleFleet';


export default function App() {
  return (
    <BrowserRouter>
      <HeaderComp/>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vehicle-fleet' element={<VehicleFleet />} />
      </Routes>
      <FooterComp />
      <ScrollToTop />
      <Scrollbar />
    </BrowserRouter>
  )
}
