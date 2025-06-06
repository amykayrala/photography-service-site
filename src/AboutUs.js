import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ceosImg from './ceos.png';

function AboutUs() {
  return (

    <div className='contact-page'>
      <Container className='about-us'>
        <Row>
          <Col xs>
              <div className='about-us-content'>
                  <h1 className="txt-purple">About Us</h1>
                  <br></br>
                  <p>Welcome to Lumiere Studio, where we believe in capturing the essence of every moment. Our team of passionate photographers is dedicated to providing you with stunning visuals that tell your unique story.</p>
                  <p>With years of experience and a keen eye for detail, we specialize in various photography styles, ensuring that every session is tailored to your needs. Whether it's a wedding, family portrait, or corporate event, we are here to make your memories last a lifetime.</p>
              </div>
          </Col>

          <Col xs={{ order: 5 }}>
              <img src={ceosImg} className="about-us-pic" alt="Pic of us" />
          </Col>
        </Row>
        <p>This website was made by Amy and Raphaelle.</p>
      </Container>
  </div>
  );
}
export default AboutUs;