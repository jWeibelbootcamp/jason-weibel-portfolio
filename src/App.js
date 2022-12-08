import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import gitHub from './images/gitHub.svg';
import linkedIn from './images/linkedIn.svg';
import envelope from './images/envelope.svg';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className='siteContainer'>
        <div className='navbarContainer'>
          <Navbar />
        </div>
        <div className='bodyContainer'>
          <Routes>
            <Route path="/jason-weibel-portfolio" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <div className='footerContainer'>
          <a href='https://github.com/jWeibelbootcamp'>
            <img src={gitHub} alt='GitHub' width="50px" height="50px" />
          </a>
          <a href='https://www.linkedin.com/in/jason-weibel/'>
            <img src={linkedIn} alt='LinkedIn' width="50px" height="50px" />
          </a>
          <a href='mailto:weibel.jason@gmail.com'>
            <img src={envelope} alt='Email' width="50px" height="50px" />
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
