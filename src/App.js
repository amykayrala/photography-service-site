import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import AboutUs from './AboutUs';
import BookSession from './BookSession';
import Contact from './Contact';

function App() {
  return (
    <Router basename="/photography-service-site">
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#photographers" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/booksession" element={<BookSession />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
