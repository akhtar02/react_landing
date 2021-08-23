import React from 'react'
import './App.css';
// import { Button } from 'react-bootstrap';
import Banner from './components/Banner';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Service />
      <Testimonial />
      <Contact />
      <Footer />
      
      
    </div>
  );
}

export default App;
