import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, HashRouter as Router, useLocation} from 'react-router-dom';
import App from './App';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/">
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route index='true' element={<Main />} />
          <Route path="Main" element={<Main />} />
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Resume" element={<Resume />} />
        </Route>
      </Routes>
    </Router>,
  </React.StrictMode>,
document.getElementById('root'));