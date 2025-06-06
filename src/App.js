import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import AboutUs from './AboutUs';
import BookSession from './BookSession';

function App() {
  return (
    <Router basename="/photography-service-site">
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/book" element={<BookSession />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
