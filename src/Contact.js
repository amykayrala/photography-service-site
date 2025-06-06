import { Container, Row, Col, Image } from 'react-bootstrap';
import './App.css';

function Contact() {
  return (
    <div className='contact-page'>
      <Row>
        <Image src="https://via.placeholder.com/100x250" fluid />
      </Row>

      <Container className='contact-page'>
        <Row>
          <Col xs={12} className='text-center'>
            <h1>Contact Us</h1>
            <p>
              We'd love to hear from you! Whether you have questions, want to book a session,
              or just want to say hello, feel free to reach out.
            </p>
          </Col>
        </Row>

        <Row className='mt-4'>
          <Col xs={12} md={6}>
            <h2>Get in Touch</h2>
            <p><strong>Email:</strong> contact@lumierestudio.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Location:</strong> Downtown Ottawa</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
