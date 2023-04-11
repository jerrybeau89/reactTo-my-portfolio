import React from 'react';

const Header = () => {

    return (
      <>
      <header>
         <nav className="navbar navbar-expand-lg bg-dark bg-body-tertiary d-flex justify-content-end">
          <div className="container-fluid">
            <a className="navbar-brand text-light" >Jerry Beau Baggett</a>
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className='nav-item'>
                  <a className="nav-link active text-light" aria-current="page" href='/'>Home</a>
                </li>
                <li className='nav-item'>
                  <a className="nav-link active text-light" aria-current="page" href='/AboutMe'>About Me</a>
                </li>
                <li className='nav-item'>
                  <a className="nav-link active text-light" aria-current="page" href='/Portfolio'>Portfolio</a>
                </li>
                <li className='nav-item'>
                  <a className="nav-link active text-light" aria-current="page" href='/Contact'>Contact</a>
                </li>
                <li className='nav-item'>
                  <a className="nav-link active text-light" aria-current="page" href='/Resume'>Resume</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      </>
    );
  };
 
export default Header;