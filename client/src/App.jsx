import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import HeaderComp from './components/HeaderComp';
import FooterComp from './components/FooterComp';
import About from './About/About';


export default function App() {
  return (
    <BrowserRouter>
      <HeaderComp/>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <FooterComp/>
    </BrowserRouter>
  )
}
