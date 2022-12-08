import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}

export default App;
