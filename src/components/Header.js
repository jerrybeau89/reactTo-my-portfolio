import React from 'react';

const Header = () => {

    return (
      <>
      <header>
         <nav className="navbar bg-dark bg-body-tertiary">
          <div className="d-flex">
            <a className="navbar-brand text-light px-2" >Jerry Beau Baggett</a>
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
                    <a className="nav-link active text-light" aria-current="page" href='/'>Home</a>
                  </li>
                  <li className='nav-item'>
                    <a className="nav-link text-light"  href='#/AboutMe'>About Me</a>
                  </li>
                  <li className='nav-item'>
                    <a className="nav-link text-light"  href='#/Portfolio'>Portfolio</a>
                  </li>
                  <li className='nav-item'>
                    <a className="nav-link text-light"  href='#/Contact'>Contact</a>
                  </li>
                  <li className='nav-item'>
                    <a className="nav-link text-light"  href='#/Resume'>Resume</a>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </nav>
          </nav>
      </header>
      </>
    );
  };
 
export default Header;