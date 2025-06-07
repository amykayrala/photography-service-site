import { Container, Row, Col, Image } from 'react-bootstrap';
import './App.css';

function Contact() {
  return (
      <div className="contact-page">
         
        <br></br>
        <br></br>
        <h1 className="txt-purple"><strong>Get in Touch</strong></h1>
        <p>We're a few clicks away! Don't hesitate to reach out for any inquiries.</p>
        <br></br>
        <br></br>

        <section className="contact-header">
          <Container>
            <Row>
              <Col xs>
              <h3 className="txt-purple-smaller">Address</h3>
              <p>364 Cooper Street, Ottawa, ON K2P 2P3</p>
              <br></br>
              </Col>

              <Col xs={{ order: 5 }}>
              <h3 className="txt-purple-smaller">Contact</h3>
              <p>info@lumierestudio.com</p>
              <p>+1 613 123 1231</p>
              <br></br>
              </Col>

              <Col xs={{ order: 5 }}>
              <h3 className="txt-purple-smaller">Hours</h3>
              <p> Monday to Friday: 9 AM - 6 PM</p>
              <br></br>
              </Col>
            </Row>
          </Container>
        </section>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.1623116111305!2d-75.6990619238334!3d45.4157179710733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05ac60f6cf1f%3A0x62ccc93e13c7b018!2s364%20Cooper%20St%2C%20Ottawa%2C%20ON%20K2P%202P3!5e1!3m2!1sfr!2sca!4v1749227175933!5m2!1sfr!2sca"
            width="80%"
            height="400"
            style={{ 
              border: '2px solid #896790',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(174, 80, 193, 0.2)',
            }}
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
            title="Lumiere Studio Location"
          ></iframe>
        </div>

    </div>
  );
}

export default Contact;
