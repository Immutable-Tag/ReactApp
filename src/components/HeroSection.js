import React from 'react';
import '../App.css';
// import { Button } from './Button';
import { Button } from 'react-bootstrap'
import './HeroSection.css';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function HeroSection() {
  let history = useHistory();

  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
      
      <h1>Tag Immutability </h1>
      <p>Guaranteeing immutability of version control system tags using blockchain</p>
      <br />
      <br />
      <div>
        <Button 
          variant="outline-light"
          size="lg"
          >
            Learn More...
            </Button>
      </div>
      <br />
      <div className='hero-btns'>
        <Button 
        variant="light"
        size="lg"
        onClick={() => {
          history.push("/createTag")
        }}>
          Create a Tag
          </Button> 

          <Button
          variant="light"
          size="lg"
          onClick={() => {
          history.push("/createTag")
        }}>
          Retrieve a Tag
          </Button>
      </div>
    </div>
  );
}

export default HeroSection;
