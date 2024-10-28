import React from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Hero from './assets/Components/Hero/Hero'
import Programs from './assets/Components/Programs/Programs'
import Title from './assets/Components/Title/Title'
import About from './assets/Components/About/About'
import Gallery from './assets/Components/Gallery/Gallery'
import Testimonials from './assets/Components/Testimonials/Testimonials'
import Contact from './assets/Components/Contact/Contact'
import Footer from './assets/Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Title title='OUR PROGRAM' subtitle='What We Offer'/>
      <Programs/>
      <About/>
      <Title title='Gallery' subtitle='Campus Photos'/>
      <Gallery/>
      <Title title='TESTIMONIALS' subtitle='What Student Says'/>
      <Testimonials/>
      <Title title='Contact Us' subtitle='Get in Touch'/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
