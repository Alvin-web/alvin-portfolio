import {BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Picture from './assets/Programming-amico.png'
import image from './assets/Innovation-amico.png'
import './Components/Styles.css';
import React from 'react'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Project from './Components/Project';
import Navbar from './Components/Navbar';

import 'bootstrap-icons/font/bootstrap-icons.css';



function App() {

  return (
    <>
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/About' Component={About}/>
        <Route path='/Project' Component={Project}/>
        <Route path='/Contact' Component={Contact}/>
      </Routes>
    </BrowserRouter>

      <p>Hello world</p>
     
    </>
  )
}



export default App
