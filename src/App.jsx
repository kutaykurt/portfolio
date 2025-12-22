import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projekte" element={<Projects />} />
                    <Route path="/ueber-mich" element={<About />} />
                    <Route path="/kontakt" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
