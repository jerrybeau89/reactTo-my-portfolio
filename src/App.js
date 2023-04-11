import React from 'react'
import { Navbar, AboutMe, Portfolio, Contact, Resume, Footer } from './components';


const App = () => {
    return (
        <div className="">
            <div className="">
              <Navbar />
            </div>
            <div className="">
              <AboutMe />
              <Portfolio />
              <Contact />
              <Resume />
            </div>
            <div className="">
              <Footer />
            </div>
        </div>
    )
}

export default App