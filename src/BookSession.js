import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function BookSession() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
            />
            <p>Selected date: {value.toDateString()}</p>
        </div>
    );
}

export default BookSession;