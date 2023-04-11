import React from 'react';

const Footer = () => {
    return (
      <>
        <footer>
          <div className="grid fixed-bottom bg-dark">
            <div className="row">
              <div className="col-6 text-end text-light">
                <h5>Contacts:</h5>
              </div>
              <div className="col-6">
                <div className="row">
                <div className="col border-start border-dark">
                  <a href="tel: 253-301-9067">
                    <i className="px-2 link-light fa fa-2x fa-phone-square"></i></a>
                  <a href="mailto: jerrybeau89@gmail.com">
                    <i className="px-2 link-light fa fa-2x fa-envelope-square"></i></a>
                  <a target="_blank" href="https://github.com/jerrybeau89">
                    <i className="px-2 link-light fa fa-2x fa-github"></i></a>
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