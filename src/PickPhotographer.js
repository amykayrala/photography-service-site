import ProgressBar from 'react-bootstrap/ProgressBar';
import './App.css';
import Form from 'react-bootstrap/Form';
 
function PickPhotographer() {

return(
    <div className='contact-page'>
        <ProgressBar animated now={66} className="custom-progress" label={'2. Service Type and Photographer'} />
        <br></br>
        <h1 className="txt-purple"><strong>Pick a Service and Photographer</strong></h1>

        <section className=''>
            <Form.Select aria-label="Default select example">
                <option>Photography Type</option>
                <option value="1">Event and Candid photography</option>
                <option value="2">Wedding, Graduation, Special Occasions</option>
                <option value="3">Content Creation and Themed Shoots</option>
                <option value="4">Product Photography and Branding</option>
                <option value="5">Family and Couple Shoots</option>
                <option value="6">Sports & Outdoors</option>
            </Form.Select>
        </section>
    </div>


    );
}

export default PickPhotographer;