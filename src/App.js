import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import gitHub from './images/gitHub.svg';
import linkedIn from './images/linkedIn.svg';
import envelope from './images/envelope.svg';
import Snowfall from 'react-snowfall';
import './App.scss';

// snowfall variables
const snowflake1 = document.createElement('img');
snowflake1.src = '/images/flower1.png';

const snowflake2 = document.createElement('img');
snowflake2.src = '/images/flower2.png';

const snowflake3 = document.createElement('img');
snowflake3.src = '/images/flower3.png';

const images = [snowflake1, snowflake2, snowflake3];
const wind = [-0.5, 0.5];

console.log(images)
// end snowfall variables

const App = () => {
  return (
    <Router>
      <div className='bodyContainer'>
        <div className='headerContainer'>
          <Header />
        </div>
        <div className='mainContainer'>
          <Routes>
            <Route path="/" element={<Home />} />
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
      <div className='snowContainer'>
        <Snowfall color='pink' snowflakeCount={75} wind={wind} speed={[0.5, 1.0]}
          style={{position: 'fixed', zIndex: -1}}
        // images={images}
        />
      </div>
    </Router>
  );
};

export default App;
