import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../components/Projects";

const Portfolio = () => {
  return (
    <>
      <div className="container bg-success bg-opacity-25 col-10 py-3 rounded text-center text">
        <h3 className="display-5 fw-bold">Projects</h3>
      </div>
      <div className="container col-10 text-center fw-bold rounded ">
        <div className="row">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
      <div className="container fw-bold bg-success bg-opacity-25 col-10 py-3 rounded text-center text">
        Want to collaborate on a project,
        <Link to="/contact" className="link h5">
          {" "}
          Contact{" "}
        </Link>
        me with what you would like to work on!
      </div>
    </>
  );
};

export default Portfolio;
