import Card from "react-bootstrap/Card";
import { TypeAnimation } from "react-type-animation";
import pic from "../assets/images/Avatar.jpeg";
import { Link } from "react-router-dom";
import { bio, intro, lang, frames, dbs, tools, iam } from "../assets/js/Text";

const AboutMe = () => {
  
  return (
    <>
      <Card className="page-content container bg-success col-lg col-10 rounded-5 bg-opacity-25">
        <Card.Body className="fw-bold">
          <section>
            <h2 className="text-center text display-5 fw-bold">
              About Me
            </h2>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-xl-3 col-md-4">
                  <img
                    src={pic}
                    className="card-img-top m-2"
                    id="avatar"
                    alt="my profile"
                  />
                </div>
                <div className="col-lg-9 col-xl-9 col-md-8 px-0 my-4">
                  <p className="display-6">
                    <code>{`<HELLO WORLD>`}</code>
                  </p>
                  <p className="text fw-bold display-6">I'm Beau.</p>
                  <TypeAnimation
                    sequence={iam}
                    wrapper="span"
                    speed={40}
                    repeat={Infinity}
                    cursor={true}
                    className={"text-animation"}
                    style={{ color: "yellow" }}
                  />
                </div>
              </div>

              <div className="text">
                <p> {intro} </p>
                <p> {bio} </p>
                <p>Technologies that I can use:</p>
                <ul className="">
                  <li>
                    Languages:
                    <span style={{ color: "orange" }}> {lang} </span>
                  </li>
                  <li>
                    Frameworks/Libraries:
                    <span style={{ color: "orange" }}> {frames} </span>
                  </li>
                  <li>
                    Databases:
                    <span style={{ color: "orange" }}> {dbs} </span>
                  </li>
                  <li>
                    Tools:
                    <span style={{ color: "orange" }}> {tools} </span>
                  </li>
                </ul>
                <p>
                  Check out my
                  <Link to="/portfolio" className="link h5"> Projects </Link>
                  and
                  <Link to="/resume" className="link h5"> Resume </Link>
                  to learn more about me!
                </p>
              </div>
            </div>
          </section>
        </Card.Body>
      </Card>
    </>
  );
};

export default AboutMe;
