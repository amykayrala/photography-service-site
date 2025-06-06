import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutUs() {
  return (

    <Container className='about-us'>
      <Row>
        <Col xs>
            <div className='about-us-content'>
                <h1>About Us</h1>
                <p>
                Welcome to Lumiere Studio, where we believe in capturing the essence of every moment. Our team of passionate photographers is dedicated to providing you with stunning visuals that tell your unique story.</p>
                <p>
                With years of experience and a keen eye for detail, we specialize in various photography styles, ensuring that every session is tailored to your needs. Whether it's a wedding, family portrait, or corporate event, we are here to make your memories last a lifetime.</p>
            </div>
        </Col>

        <Col xs={{ order: 5 }}>
            <div className='about-us-pic'>
                <img src="https://via.placeholder.com/400" alt="Pic of the CEOs" />
                <div className='ceos-description'>
                    <p>We are located in the heart of the city, easily accessible for all your photography needs. Visit us to discuss your next project or book a session.</p>
                </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
}
export default AboutUs;