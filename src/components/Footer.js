import React from 'react';

const Footer = () => {
    return (
      <>
        <footer className='sticky-bottom'>
          <div className=" bg-dark fixed-bottom p-1">
            <div className="row">
              <div className="col-6 text-end text-light">
                <h5>Contacts:</h5>
              </div>
              <div className="col-6">
                <div className="row">
                <div className="col border-start border-dark" id='icons'>
                  <a href="tel: 253-301-9067" rel="noreferrer">
                    <i className="px-2 link-light fa fa-2x fa-phone-square icon" id='phone'></i></a>
                  <a href="mailto: jerrybeau89@gmail.com" rel="noreferrer">
                    <i className="px-2 link-light fa fa-2x fa-envelope-square icon" id='email'></i></a>
                  <a target="_blank" href="https://github.com/jerrybeau89" rel="noreferrer">
                    <i className="px-2 link-light fa fa-2x fa-github icon" id='github'></i></a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  };
 
export default Footer;