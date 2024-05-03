import './App.css';
import React from 'react';
import HeaderSection from './components/headerSection.js';
import HeroSection1 from './components/heroSection-1.js';

function App() {
  return (
    <>
    <div className='header-section'>
    <HeaderSection />
    </div>
    <HeroSection1 />
    </>
  );
}

export default App;
