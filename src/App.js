import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Header from './components/Header';
import Footer from './components/Footer';
import Snowfall from 'react-snowfall';
import './App.scss';

const wind = [-0.5, 0.5];

const App = () => {
  return (
    <Router >
      <div className='bodyContainer'>
        <div className='headerContainer'>
          <Header />
        </div>
        <div className='mainContainer'>
          <Routes>
            <Route path="/jason-weibel-portfolio" element={<Home />} />
            <Route path="jason-weibel-portfolio/about" element={<About />} />
            <Route path="jason-weibel-portfolio/projects" element={<Projects />} />
            <Route path="jason-weibel-portfolio/resume" element={<Resume />} />
          </Routes>
        </div>
        <div className='footerContainer'>
          <Footer />
        </div>
      </div>
      <div className='snowContainer'>
        <Snowfall color='pink' snowflakeCount={75} wind={wind} speed={[0.5, 1.0]}
          style={{position: 'fixed', zIndex: -1}}
        />
      </div>
    </Router>
  );
};

export default App;
