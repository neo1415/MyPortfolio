import React from 'react'

import { About, Footer, Header, Skills, Testimonial, Work } from './Containers';
import{ Navbar } from './Components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App