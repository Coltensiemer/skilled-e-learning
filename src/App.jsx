import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Courses from './components/Courses';
import Footer from './components/Footer'
import HeroImg from './components/HeroImg';

import './App.css'


function App() {

  return (
    <div className='m-auto overflow-hidden font-PlusJakarta'>
  <Header /> 
  <div className='md:flex lg:flex'>
  <Hero />
  <HeroImg />
  </div>
  <Courses />
  <Footer />
  </div>
  )
}

export default App
