import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Team from './Team.js';
import HeroSection from '../HeroSection';
// import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Team />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
