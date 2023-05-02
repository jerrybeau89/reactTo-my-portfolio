import React from 'react'
import { Routes, Route, HashRouter as Router} from 'react-router-dom';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import './style.css'

const App = () => {

    return (
        <div>
          <Router basename="/">
            <Routes>
              <Route>
                <Route index='true' element={<Main />} />
                <Route path="/AboutMe" element={<AboutMe />} />
                <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Resume" element={<Resume />} />
              </Route>
            </Routes>
          </Router>,
        </div>
    )
}

export default App;