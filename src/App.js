import React from 'react'
import { Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import './style.css'

const App = () => {

    return (
    
      <Routes>
          <Route index='true' element={<Main />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
      </Routes>
          
    )
}

export default App;