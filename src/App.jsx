import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Courses from './components/Courses';
import Footer from './components/Footer'

import './App.css'


function App() {

  return (
    <div className='m-auto'>
  <Header /> 
  <Hero />
  <Courses />
  <Footer />
  </div>
  )
}

export default App
