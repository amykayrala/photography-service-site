import React, { useState } from 'react';
import Calendar from 'react-calendar';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'react-calendar/dist/Calendar.css';
import TimePicker from 'react-time-picker';
import {Link} from 'react-router-dom';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import { Button, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


function BookSession() {
    const [value, onChange] = useState(new Date());
    const [startTime, setStartTime] = useState("10:00")
    const [endTime, setEndTime] = useState("12:00"); 
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
            return;
        }

        setValidated(true);
        navigate('/booksession/pickphotographer')
    };

    return (
        <div className='book-page'>
            <ProgressBar animated now={50} variant="success" label={' 1. Date and Time'} />
            <h1 style={{paddingTop: "8%"}} className='txt-purple'>Pick a date, time and fill your info</h1>
            <Row  className="d-flex align-items-center g-0" style={{padding:"3% 0 5% 0"}}>
                <Col md className='text-center text-col'>
                    <div className='calendar'>
                        <h5>
                            <FaRegCalendarAlt size={25} color="black "  style={{ marginRight: '8px' }} />
                            {value.toDateString()}

                        </h5>
                        <Calendar
                            onChange={onChange}
                            value={value}
                            minDate={new Date()}
                        />
                        <Row style={{ paddingTop: '8px' }}>
                            <Col>
                                <h6>
                                    Start time: 
                                </h6>
                                <div>
                                    <TimePicker onChange={setStartTime} value={startTime} style={{ marginLeft: '8px' }}/>
                                </div>
                            </Col>
                            <Col>
                                <h6>
                                    End time: 
                                </h6>
                                <div>
                                    <TimePicker onChange={setEndTime} value={endTime} style={{ marginLeft: '8px' }} />
                                 </div>
                            </Col>
                        </Row>
                    </div>

                </Col>
                <Col md className='text-col' >
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <div  className='my-form'>
                            <Row>
                                <Form.Group as={Col}  className="mb-3" md controlId="validationCustom01">
                                <Form.Label>First name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="First name"
                                />
                                </Form.Group>
                                <Form.Group as={Col} md controlId="validationCustom02">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Last name"
                                />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" required/>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Additional comments</Form.Label>
                                <Form.Control as="textarea" placeholder="Comments" rows={3} />
                            </Form.Group>
                        </div>
                        <div className="next-btn text-end">
                            < Button type="submit" variant="outline-dark">Next</Button>

                        </div>
                    
                    </Form>


                    
                </Col>

            </Row>

        </div>
    );
}

export default BookSession;