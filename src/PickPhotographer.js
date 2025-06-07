import ProgressBar from 'react-bootstrap/ProgressBar';

import './App.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import formImg from './home-background.jpg';
import PickButton from './PickButton';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import portfolioImg from './portfolio-img.png'; 

function PickPhotographer() {

{/* thank u msg */}
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

{/* portfolio modal */}
  const [showModal, setShowModal] = useState(false);
  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

return(
    <div className='contact-page'>
        <ProgressBar animated now={90} className="custom-progress" label={'2. Service Type and Photographer'} />
        <br></br>
        <h1 className="txt-purple"><strong>Pick your Service and Photographer</strong></h1>

        <section>
            <Container className="my-4">
            <Row className="justify-content-center">
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

            <img src={formImg} className="w-75 py-3" 
              style={{ height: '300px', objectFit: 'cover' }} />

            <h2>Pick your Photographer</h2>
            <p>The perfect photographer for your occasion is just a click away.</p>
        </section>

        <section>
            <Container className="justify-content-center bg-light p-4">
            {/* Row 1 */}
            <Row className="mb-4">
                <Col md={4}>
                <Card>
                    <Card.Body>
                    <Card.Title>Alex Kim</Card.Title>
                    <Card.Text>
                        200$/h
                    </Card.Text>
                    <Button className="view-portfolio-btn me-2" onClick={handleModalOpen}>View Portfolio</Button>
                    <PickButton />
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                    <Card.Title>Maria Lopez</Card.Title>
                    <Card.Text>
                        300$/h
                    </Card.Text>
                    <Button className="view-portfolio-btn me-2"onClick={handleModalOpen}>View Portfolio</Button>
                    <PickButton />
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                    <Card.Title>James Tran</Card.Title>
                    <Card.Text>
                        250$/h
                    </Card.Text>
                    <Button className="view-portfolio-btn me-2"onClick={handleModalOpen}>View Portfolio</Button>
                    <PickButton />
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
                    <Card.Text>
                        100$/h
                    </Card.Text>
                    <Button className="view-portfolio-btn me-2"onClick={handleModalOpen}>View Portfolio</Button>
                    <PickButton />
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                    <Card.Title>Omar Farah</Card.Title>
                    <Card.Text>
                        150$/h
                    </Card.Text>
                    <Button className="view-portfolio-btn me-2"onClick={handleModalOpen}>View Portfolio</Button>
                    <PickButton />
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>Mia Chen</Card.Title>
                        <Card.Text>
                            350$/h
                        </Card.Text>
                        <Button className="view-portfolio-btn me-2"onClick={handleModalOpen}>View Portfolio</Button>
                        <PickButton />
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
                        <Card.Text>
                            225$/h
                        </Card.Text>
                        <Button className="view-portfolio-btn me-2"onClick={handleModalOpen}>View Portfolio</Button>
                        <PickButton />
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>Emily Burns</Card.Title>
                        <Card.Text>
                            175$/h
                        </Card.Text>
                        <Button className="view-portfolio-btn me-2"onClick={handleModalOpen}>View Portfolio</Button>
                        <PickButton />
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>Mike Tyrell</Card.Title>
                        <Card.Text>
                            325$/h
                        </Card.Text>
                        <Button className="view-portfolio-btn me-2"onClick={handleModalOpen}>View Portfolio</Button>
                        <PickButton />
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    
    <>
      <Button className="view-portfolio-btn my-4" onClick={handleShow}>
        Submit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you for booking with Lumiere Studio!</Modal.Title>
        </Modal.Header>
        <Modal.Body>A confirmation email has been sent to your inbox. We're excited to work with you and hope you have a pleasant experience!</Modal.Body>
        <Modal.Footer>
          <Button className="view-portfolio-btn" onClick={handleClose}>
            View Booking Details
          </Button>
          <Button className="view-portfolio-btn" onClick={() => window.location.href = '/photography-service-site'}>
            Go to Home
          </Button>
        </Modal.Footer>
      </Modal>
    </>

    <>
    <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Portfolio</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img 
            src={portfolioImg} 
            alt="Thank you" 
            style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }} />
        </Modal.Body>
      </Modal>
    </>

        </section>
    </div>

    );
}

export default PickPhotographer;