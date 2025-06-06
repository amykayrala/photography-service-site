// src/Home.js
import { Button } from 'react-bootstrap';
import './App.css';

function Home() {
  return (
    <div className='home-page'>
      <div className='home-title'>
        <h1>Natural Moments,</h1>
        <h1>Beautifully Captured</h1>
        <Button variant='light' href="/book">Find a Photographer</Button>
      </div>

      <div id="photographers" className='photographers-section'>
        <h2>Our Photographers</h2>
        <p>Meet the talented professionals behind the lens.</p>
        {/* Add photos or cards later */}
      </div>
    </div>
  );
}

export default Home;
