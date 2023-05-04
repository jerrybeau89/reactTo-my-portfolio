import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
      <header>
         <nav className="navbar bg-dark bg-body-tertiary">
          <div className="d-flex">
            <Link className="navbar-brand text-light px-2" to='/'>Jerry Beau Baggett</Link>
          </div>
          <nav className="navbar navbar-expand-lg px-2 bg-dark bg-body-tertiary d-flex justify-content-end">
          <div className="d-flex">
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end bg-dark text-light" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Explore</h5>
                <button type="button" className="btn-close text-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body text-light">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className='nav-item'>
                    <Link className="nav-link active text-light" aria-current="page" to='/'>Home</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className="nav-link text-light"  to='/AboutMe'>About Me</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className="nav-link text-light"  to='/Portfolio'>Portfolio</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className="nav-link text-light"  to='/Contact'>Contact</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className="nav-link text-light"  to='/Resume'>Resume</Link>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </nav>
          </nav>
      </header>
    );
  };
 
export default Header;