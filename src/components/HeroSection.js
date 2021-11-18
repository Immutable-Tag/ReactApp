import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import history from './history';
import createTag from './CreateTag';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      
      <h1>Tag immutability </h1>
      <p>Guaranteeing immutability of version control system tags using blockchain</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Learn More...
        </Button>
        </div>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={createTag}  
        >
          Create a tag
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Retrieve a tag
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
