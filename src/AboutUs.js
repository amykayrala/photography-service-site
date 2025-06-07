import './App.css';
import ceosImg from './amy+raph.JPG';
import photographer from './about1.jpg';
import family from './about2.jpg';
import couple from './about3.jpg';
import { Button, Row, Col } from 'react-bootstrap';
import './App.css';
import {HashLink} from 'react-router-hash-link';
import Image from 'react-bootstrap/Image';

function AboutUs() {
  return (
      <div>
        <section className='aboutcompany'>
          <Row className='g-0'>
            <Col md className='text-col'>
                <div className='about-us-content'>
                    <h1 className="txt-purple">About Us</h1>
                    <br></br>
                    <p>Welcome to Lumiere Studio, where we believe in capturing the essence of every moment. Our team of passionate photographers is dedicated to providing you with stunning visuals that tell your unique story.</p>
                    <p>With years of experience and a keen eye for detail, we specialize in various photography styles, ensuring that every session is tailored to your needs. Whether it's a wedding, family portrait, or corporate event, we are here to make your memories last a lifetime.</p>
                    <Button as={HashLink} to="/#photographers" variant="outline-dark">View our photographers</Button>
                </div>
            </Col>

            <Col md={8}>
              <Row className='g-0'>
                <Col md>
                  <img src={family} className="aboutpics" alt="family picture" />
                    
                </Col>
                <Col md>
                    <img src={photographer} className="aboutpics" alt="photographer" />

                </Col>
                <Col md>
                  <img src={couple} className="aboutpics" alt="couple picture" />
                </Col>
              </Row>

            </Col>
          </Row>

        </section >

        <section className='middle text-center align-items-center'>
            <Row className='g-0'>
              <Col md  className="d-flex justify-content-center align-items-center">
                <p>
                  passion
                </p>
              </Col>
              <Col md  className="d-flex justify-content-center align-items-center">
                <p>
                  unique
                </p>

                  
              </Col>
              <Col md  className="d-flex justify-content-center align-items-center">
                <p>
                  details
                </p>
                  
              </Col >
            </Row>

        </section>

        <section className='aboutcreators'>
          <Row className='g-0'>
            <Col md>
                <Image src={ceosImg} className="about-us-pic" alt="Pic of us" />
            </Col>
            <Col md className='text-col'>
                <div className='about-creator-content'>
                    <h1 className="txt-purple">About the creators</h1>
                    <br></br>
                    <p>This website was made by Amy and Raphaelle, two software engineering students from the University of Ottawa. </p>
                </div>
            </Col>
          </Row>
        </section>
      </div>
  );
}
export default AboutUs;