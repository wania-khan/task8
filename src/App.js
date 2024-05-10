import './App.css';
import React from 'react';
import HeaderSection from './components/headerSection.js';
import HeroSection1 from './components/heroSection-1.js';
import HeroSection2 from './components/heroSection-2.js';
import HeroSection3 from './components/heroSection-3.js';
import LogoBar from './components/logoBar.js';
import HeroSection4 from './components/heroSection-4.js';
function App() {
  return (
    <>
    <div className='header-section'>
    <HeaderSection />
    </div>
    <HeroSection1 />
    <HeroSection2 />
    <HeroSection3 />
    <LogoBar />
    <HeroSection4 />
    </>
  );
}

export default App;
