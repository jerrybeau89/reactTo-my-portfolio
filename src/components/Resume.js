import React from 'react';

const Resume = () => {
    return (
      <>
      <div className='grid container my-5 bg-secondary text-center rounded'>
        <h1 className='bg-secondary p-2'>Proficiencies</h1>
        <ul className='row'>
          <li className='col-3'>
            <div className=''>
              <h4 className=''>Front-End Skills</h4>
              <p className=''>Experience with <br />React • Next.JS<br />Handlebars</p>
            </div>
          </li>
          <li className='col-3'>
            <div className=''>
              <h4 className=''>Design Technologies</h4>
              <p className=''>Experience with <br />Bootstrap • CSS • <br />Materialize</p>
            </div>
          </li>
          <li className='col-3'>
            <div className=''>
              <h4 className=''>Back-End Skills</h4>
              <p className=''>Experience with <br />Node • MySql2 • Sequelize<br />RESTful APIs • MongoDB</p>
            </div>
          </li>
          <li className='col-3'>
            <div className=''>
              <h4 className=''>Additional Skills</h4>
              <p className=''>Experience with <br />PWAs • MERN • DOM Manipulation<br />Express.JS • MVC</p>
            </div>
          </li>
        </ul>

      <div >
        <a className='btn btn-success text-light' href='https://docs.google.com/document/d/1A0IK-9dNvKmF9tg0ljSM5ukAPcapYFz4/edit?usp=sharing&ouid=105779729295370186894&rtpof=true&sd=true' rel="noreferrer">MY RESUME</a>
      </div>
    </div >
      </>
    );
  };
 
export default Resume;