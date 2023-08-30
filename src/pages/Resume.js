import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Resume = () => {
  return (
    <>
      <Card className=" page-content container rounded-5 col-lg col-10 bg-success bg-opacity-25 ">
        <Card.Body className="fw-bold">
          <section>
            <h2 className="text-center text display-5 fw-bold">Experience</h2>
            <div className="text">
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
            </div>
            <Button
              className="btn shadow d-grid col-sm-2 mx-auto"
              variant="danger"
              href="https://docs.google.com/document/d/1yYns7Fjb0r3NBMzSzixSi6x4_mowTsPPazKruCuDIOo/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </Button>
          </section>
        </Card.Body>
      </Card>
    </>
  );
};

export default Resume;
