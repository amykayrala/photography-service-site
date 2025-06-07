import React, { useState } from 'react';
import Calendar from 'react-calendar';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'react-calendar/dist/Calendar.css';
import Form from 'react-bootstrap/Form';
import TimePicker from 'react-time-picker';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';


function BookSession() {
    const [value, onChange] = useState(new Date());
    const [valuetime, onChangetime] = useState('10:00');

    return (
        <div className='contact-page'>
            <ProgressBar animated now={33} variant="success" label={' 1. Date and Time'} />
            <p>Selected date: {value.toDateString()}</p>
            <Calendar
                onChange={onChange}
                value={value}
            />
            <div>
                <TimePicker onChange={onChangetime} value={valuetime} />
            </div>
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <Button as={Link} to='/booksession/pickphotographer' variant="outline-dark">Next</Button>
        </div>
    );
}

export default BookSession;