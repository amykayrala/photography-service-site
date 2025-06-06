// src/Home.js
import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { NavLink } from 'react-router-dom';


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
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                    <Card.Title>Alex Kim</Card.Title>
                    <Card.Text>Outdoor & portrait photography</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                    <Card.Title>Maria Lopez</Card.Title>
                    <Card.Text>Weddings & natural light</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                    <Card.Title>James Tran</Card.Title>
                    <Card.Text>Urban lifestyle & studio</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>

            {/* Row 2 */}
            <Row className="mb-4">
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                    <Card.Title>Sara Lee</Card.Title>
                    <Card.Text>Fashion & editorial shoots</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                    <Card.Title>Omar Farah</Card.Title>
                    <Card.Text>Events & candid moments</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                    <Card.Title>Emily Chen</Card.Title>
                    <Card.Text>Studio portraits & branding</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>

                {/* Row 3 */}
            <Row className="mb-4">
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                    <Card.Title>Sara Lee</Card.Title>
                    <Card.Text>Fashion & editorial shoots</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                    <Card.Title>Omar Farah</Card.Title>
                    <Card.Text>Events & candid moments</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                    <Card.Title>Emily Chen</Card.Title>
                    <Card.Text>Studio portraits & branding</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>

                {/* Row 4 */}
            <Row className="mb-4">
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                    <Card.Title>Sara Lee</Card.Title>
                    <Card.Text>Fashion & editorial shoots</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                    <Card.Title>Omar Farah</Card.Title>
                    <Card.Text>Events & candid moments</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Img variant="top" src="https://via.placeholder.com/150" />
                    <Card.Body>
                    <Card.Title>Emily Chen</Card.Title>
                    <Card.Text>Studio portraits & branding</Card.Text>
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
