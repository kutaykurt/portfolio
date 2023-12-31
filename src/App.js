import Header from './components/Header/Header';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Aboutme from './pages/Aboutme/Aboutme';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Aboutme />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
