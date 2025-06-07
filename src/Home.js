// src/Home.js
import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { NavLink } from 'react-router-dom';
import photographerImg from './photographer-image.png';
import photographerImg2 from './photographer-image2.png';
import photographerImg3 from './photographer-image3.png';
import photographerImg4 from './photographer-image4.png';
import photographerImg5 from './photographer-image5.png';
import photographerImg6 from './photographer-image6.png';
import photographerImg7 from './photographer-image7.png';
import photographerImg8 from './photographer-image8.png';
import photographerImg9 from './photographer-image9.png';


function Home() {
  return (
    <div className='home-page'>
      <section className='home-title'>
        <div className='home-text'>
            <h1>Natural Moments,</h1>
            <h1>Beautifully Captured</h1>
            <Button as={NavLink} to="/booksession" variant="outline-light">Find a Photographer</Button>
        </div>
      </section>

      <section id="photographers" className='photographers-section'>
        <h2>Our Photographers</h2>
        <p>Meet the talented professionals behind the lens.</p>

            <Container>
            {/* Row 1 */}
            <Row className="mb-4">
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={photographerImg} />
                    <Card.Body>
                    <Card.Title>Alex Kim</Card.Title>
                    <Card.Text>Outdoor & portrait photography</Card.Text>
                    <Button variant="outline-dark">View Portfolio</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={photographerImg2} />
                    <Card.Body>
                    <Card.Title>Maria Lopez</Card.Title>
                    <Card.Text>Weddings & natural light</Card.Text>
                    <Button variant="outline-dark">View Portfolio</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={photographerImg3} />
                    <Card.Body>
                    <Card.Title>James Tran</Card.Title>
                    <Card.Text>Urban lifestyle & studio</Card.Text>
                    <Button variant="outline-dark">View Portfolio</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>

            {/* Row 2 */}
            <Row className="mb-4">
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={photographerImg4} />
                    <Card.Body>
                    <Card.Title>Sara Lee</Card.Title>
                    <Card.Text>Fashion & editorial shoots</Card.Text>
                    <Button variant="outline-dark">View Portfolio</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={photographerImg5} />
                    <Card.Body>
                    <Card.Title>Omar Farah</Card.Title>
                    <Card.Text>Events & candid moments</Card.Text>
                    <Button variant="outline-dark">View Portfolio</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={photographerImg6} />
                    <Card.Body>
                        <Card.Title>Mia Chen</Card.Title>
                        <Card.Text>Studio portraits & branding</Card.Text>
                        <Button variant="outline-dark">View Portfolio</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>

                {/* Row 3 */}
            <Row className="mb-4">
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={photographerImg7} />
                    <Card.Body>
                        <Card.Title>Ali Barad</Card.Title>
                        <Card.Text>Graduation and Special Occasions</Card.Text>
                        <Button variant="outline-dark">View Portfolio</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={photographerImg8} />
                    <Card.Body>
                        <Card.Title>Emily Burns</Card.Title>
                        <Card.Text>Branding and Product Photography</Card.Text>
                        <Button variant="outline-dark">View Portfolio</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src={photographerImg9} />
                    <Card.Body>
                        <Card.Title>Mike Tyrell</Card.Title>
                        <Card.Text>Content Creation & Themed Shoots</Card.Text>
                        <Button variant="outline-dark">View Portfolio</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
