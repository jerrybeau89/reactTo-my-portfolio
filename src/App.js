import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {

  const location = useLocation();

    return (
        <div className=''>
          <Header />
          <Outlet location={location} key={location.pathname} />
          <Footer />
        </div>
    )
}

export default App;