import ProgressBar from 'react-bootstrap/ProgressBar';
import './App.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function PickPhotographer() {

return(
    <div className='contact-page'>
        <ProgressBar animated now={90} className="custom-progress" label={'2. Service Type and Photographer'} />
        <br></br>
        <h1 className="txt-purple"><strong>Pick your Service and Photographer</strong></h1>

        <section className=''>
            <Container className="my-4">
            <Row className="justify-content-center bg-light p-4">
                <Col md={6}>
                    <Form.Select>
                        <option>Select a Service</option>
                        <option value="1">Events and Candid photography</option>
                        <option value="2">Wedding, Graduation, Special Occasions</option>
                        <option value="3">Content Creation and Themed Shoots</option>
                        <option value="4">Product Photography and Branding</option>
                        <option value="5">Family and Couple Shoots</option>
                        <option value="6">Sports & Outdoors</option>
                    </Form.Select>
                </Col>
            </Row>
            </Container>

            
            <h2>Pick your Photographer</h2>
            <p>The perfect photographer for your occasion is just a click away.</p>

            <Container className="justify-content-center bg-light p-4">
            {/* Row 1 */}
            <Row className="mb-4">
                <Col md={4}>
                <Card>
                    <Card.Body>
                    <Card.Title>Alex Kim</Card.Title>
                    <Button className="view-portfolio-btn me-2">View Portfolio</Button>
                    <Button className="view-portfolio-btn">Pick Me!</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                    <Card.Title>Maria Lopez</Card.Title>
                    <Button className="view-portfolio-btn me-2">View Portfolio</Button>
                    <Button className="view-portfolio-btn">Pick Me!</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                    <Card.Title>James Tran</Card.Title>
                    <Button className="view-portfolio-btn me-2">View Portfolio</Button>
                    <Button className="view-portfolio-btn">Pick Me!</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>

            {/* Row 2 */}
            <Row className="mb-4">
                <Col md={4}>
                <Card>
                    <Card.Body>
                    <Card.Title>Sara Lee</Card.Title>
                    <Button className="view-portfolio-btn me-2">View Portfolio</Button>
                    <Button className="view-portfolio-btn">Pick Me!</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                    <Card.Title>Omar Farah</Card.Title>
                    <Button className="view-portfolio-btn me-2">View Portfolio</Button>
                    <Button className="view-portfolio-btn">Pick Me!</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>Mia Chen</Card.Title>
                        <Button className="view-portfolio-btn me-2">View Portfolio</Button>
                        <Button className="view-portfolio-btn">Pick Me!</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>

                {/* Row 3 */}
            <Row className="mb-4">
                <Col md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>Ali Barad</Card.Title>
                        <Button className="view-portfolio-btn me-2">View Portfolio</Button>
                        <Button className="view-portfolio-btn">Pick Me!</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>Emily Burns</Card.Title>
                        <Button className="view-portfolio-btn me-2">View Portfolio</Button>
                        <Button className="view-portfolio-btn">Pick Me!</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>Mike Tyrell</Card.Title>
                        <Button className="view-portfolio-btn me-2">View Portfolio</Button>
                        <Button className="view-portfolio-btn">Pick Me!</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>

        </section>
    </div>

    );
}

export default PickPhotographer;