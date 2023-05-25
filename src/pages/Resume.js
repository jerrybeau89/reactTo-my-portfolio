import React from "react";

const Resume = () => {
  return (
    <>
      <div className="container col-10 my-2">
        <h3 className="fw-bold">Experience</h3>
      </div>
      <div className="container my-2 col-10 bg-secondary bg-opacity-75 text-center rounded">
        <ul className="row">
          <li className="col-12 col-lg-3 my-1 fw-bold">
            <div>
              <h4>Front-End Skills</h4>
              <p>
                Experience with <br />
                React • Next.JS
                <br />
                Handlebars
              </p>
            </div>
          </li>
          <li className="col-12 col-lg-3 my-1 fw-bold">
            <div>
              <h4>Design Technologies</h4>
              <p>
                Experience with <br />
                Bootstrap • CSS • <br />
                Materialize
              </p>
            </div>
          </li>
          <li className="col-12 col-lg-3 my-1 fw-bold">
            <div>
              <h4>Back-End Skills</h4>
              <p>
                Experience with <br />
                Node • MySql2 • Sequelize
                <br />
                RESTful APIs • MongoDB
              </p>
            </div>
          </li>
          <li className="col-12 col-lg-3 my-1 fw-bold">
            <div>
              <h4>Additional Skills</h4>
              <p>
                Experience with <br />
                PWAs • MERN • DOM Manipulation
                <br />
                Express.JS • MVC
              </p>
            </div>
          </li>
        </ul>

        <div>
          <a
            className="btn btn-success text-light"
            href="https://docs.google.com/document/d/1hOJ6au2HX5z-AHcwPJt9PivuboDQURPD/edit?usp=share_link&ouid=105779729295370186894&rtpof=true&sd=true"
            target="_blank"
            rel="noreferrer"
          >
            MY RESUME
          </a>
        </div>
      </div>
    </>
  );
};

export default Resume;
