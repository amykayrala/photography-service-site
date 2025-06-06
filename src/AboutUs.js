import './App.css';
import NavBar from './NavBar';

function AboutUs() {
  return (
    <div className='AboutUs'>
      <NavBar />
      <div className='about-us-content'>
        <h1>About Us</h1>
        <p>
          Welcome to Lumiere Studio, where we believe in capturing the essence of every moment. Our team of passionate photographers is dedicated to providing you with stunning visuals that tell your unique story.</p>
        <p>
          With years of experience and a keen eye for detail, we specialize in various photography styles, ensuring that every session is tailored to your needs. Whether it's a wedding, family portrait, or corporate event, we are here to make your memories last a lifetime.</p>
      </div>
    </div>
  );
}
export default AboutUs;